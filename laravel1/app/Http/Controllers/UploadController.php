<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class UploadController extends Controller
{
     // Upload file to local storage
     public function uploadToLocal(Request $request)
     {
         // Validate the file
         $request->validate([
             'document' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048',
         ]);

         // Store the file locally in public directory
         $path = $request->file('document')->store('uploads', 'public');

         // Return the path as a JSON response
         return response()->json(['path' => $path], 200);
     }

     // Retrieve file from local storage
     public function getFromLocal($filename)
     {
         $path = storage_path("app/public/uploads/{$filename}");

         if (file_exists($path)) {
             return response()->file($path);
         }

         return response()->json(['message' => 'File not found.'], 404);
     }

     // Upload image to MinIO
     public function uploadToMinio(Request $request)
     {
         // Validate the image file
         $request->validate([
             'image' => 'required|image|max:2048',
         ]);

         // Get the image from the request
         $image = $request->file('image');
         $fileName = uniqid() . '.' . $image->getClientOriginalExtension();

         // Store the image in the 'uploads' directory on the MinIO disk
         $path = $image->storeAs('uploads', $fileName, 'minio');

         // Return the path as a JSON response
         return response()->json([
             'path' => $path,
             'url' => env('MINIO_ENDPOINT') . '/' . env('MINIO_BUCKET') . '/' . $path,
         ], 200);
     }

     // Retrieve file from MinIO
     public function getFromMinio($filename)
     {
         $path = "uploads/{$filename}";

         if (Storage::disk('minio')->exists($path)) {
             $file = Storage::disk('minio')->get($path);
             $mime = Storage::disk('minio')->mimeType($path);
             return response($file)->header('Content-Type', $mime);
         }
         return response()->json(['message' => 'File not found in MinIO.'], 404);
     }

}
