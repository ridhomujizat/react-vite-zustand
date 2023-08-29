export interface UploadFileType {
  file: Blob;
}

export interface UploadFileResponsType {
  fileUrl: string;
  fileWithSignedUrl: string;
  objectName: string;
}
