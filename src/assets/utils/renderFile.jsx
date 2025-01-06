export function renderFile(fileInfo, altText) {
  const { src, extension } = fileInfo;

  const imageExtensions = ["jpg", "jpeg", "png", "tif", "gif", "bmp", "webp", "svg"];
  const videoExtensions = ["mp4", "mov", "avi", "mkv", "webm"];

  return imageExtensions.includes(extension) ? (
    <img src={src} alt={altText} title={altText} />
  ) : videoExtensions.includes(extension) ? (
    <video autoPlay loop muted playsInline>
      <source src={src} type={`video/${extension}`} />
    </video>
  ) : null;
}
