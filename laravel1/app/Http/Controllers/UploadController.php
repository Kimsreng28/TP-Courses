<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class UploadController extends Controller
{
    public function upload(Request $request)
    {
        // Validate the request
        $request->validate([
            'document' => 'required|file|mimes:jpg,jpeg,png|max:2048',
        ]);

        // Store the file on MinIO
        $minioPath = $request->file('document')->store('uploads', 'minio');

        // Store the file locally (public storage)
        $localPath = $request->file('document')->store('uploads', 'public');

        // Manually construct the URL for MinIO
        $minioUrl = env('MINIO_ENDPOINT') . '/' . env('MINIO_BUCKET') . '/' . $minioPath;

        // Return the response with both paths and URLs
        return response()->json([
            'minio_path' => $minioPath,
            'minio_url' => $minioUrl,
            'local_path' => $localPath,
        ], 201);
    }

}
