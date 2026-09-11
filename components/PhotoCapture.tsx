"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "../lib/analytics";

const MAX_PHOTOS = 8;

type PhotoCaptureProps = {
  files: File[];
  onChange: (files: File[]) => void;
};

export default function PhotoCapture({ files, onChange }: PhotoCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  useEffect(() => {
    return () => stopCamera();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const stream = streamRef.current;
    if (!cameraOpen || !video || !stream) return;
    video.srcObject = stream;
    void video.play();
  }, [cameraOpen]);

  function stopCamera() {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setCameraOpen(false);
  }

  async function openCamera() {
    setCameraError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      streamRef.current = stream;
      setCameraOpen(true);
    } catch {
      setCameraError("Camera access was blocked. Upload a photo instead, or allow the camera and try again.");
    }
  }

  function addFiles(list: FileList | null) {
    if (!list) return;
    const next = [...files, ...Array.from(list)].slice(0, MAX_PHOTOS);
    onChange(next);
    track("photo_added", { count: next.length });
  }

  function captureFrame() {
    const video = videoRef.current;
    if (!video || files.length >= MAX_PHOTOS) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.drawImage(video, 0, 0);
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const file = new File([blob], `inspection-${Date.now()}.jpg`, {
          type: "image/jpeg",
        });
        const next = [...files, file].slice(0, MAX_PHOTOS);
        onChange(next);
        track("photo_added", { count: next.length, source: "camera" });
      },
      "image/jpeg",
      0.85,
    );
  }

  function removeAt(index: number) {
    onChange(files.filter((_, i) => i !== index));
  }

  return (
    <div className="mt-6">
      <p className="serif text-2xl">Add photos of the issue</p>
      <p className="mt-2 text-sm leading-6 text-muted">
        Upload from your gallery or take a live photo. Damp patches, bathrooms,
        and the ceiling below a wet room are most useful. Optional, up to {MAX_PHOTOS}.
      </p>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <label className="cursor-pointer border border-line bg-paper px-4 py-4 text-center text-sm font-medium">
          Upload photos
          <input
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={(event) => {
              addFiles(event.target.files);
              event.target.value = "";
            }}
          />
        </label>
        <button
          type="button"
          onClick={cameraOpen ? stopCamera : openCamera}
          className="border border-line bg-paper px-4 py-4 text-sm font-medium"
        >
          {cameraOpen ? "Close camera" : "Take a realtime photo"}
        </button>
      </div>

      {cameraError ? <p className="mt-3 text-sm text-copper">{cameraError}</p> : null}

      {cameraOpen ? (
        <div className="mt-4 border border-line bg-forest p-3">
          <video
            ref={videoRef}
            className="aspect-[4/3] w-full bg-black object-cover"
            playsInline
            muted
            autoPlay
          />
          <button
            type="button"
            onClick={captureFrame}
            className="mt-3 w-full bg-copper py-3 text-sm font-medium text-white"
          >
            Capture photo
          </button>
        </div>
      ) : null}

      {files.length > 0 ? (
        <ul className="mt-4 grid grid-cols-3 gap-2">
          {files.map((file, index) => (
            <li key={`${file.name}-${index}`} className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previews[index]}
                alt=""
                className="aspect-square w-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeAt(index)}
                className="absolute right-1 top-1 bg-ink px-1.5 text-xs text-paper"
                aria-label={`Remove ${file.name}`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
