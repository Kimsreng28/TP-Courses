<html>

<body>
    <h3>Upload File to Local Storage</h3>
    <form action="/upload_local" method="POST" enctype="multipart/form-data">
        @csrf
        <input type="file" name="document" />
        <button type="submit">Upload to Local</button>
    </form>

    <h3>Upload File to MinIO</h3>
    <form action="/upload_minio" method="POST" enctype="multipart/form-data">
        @csrf
        <input type="file" name="image" />
        <button type="submit">Upload to MinIO</button>
    </form>
</body>

</html>
