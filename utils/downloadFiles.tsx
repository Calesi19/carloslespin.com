export const downloadResume = (): void => {
  const link = document.createElement("a");
  link.href = "/files/Resume.pdf";
  link.download = "Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadCoverLetter = (): void => {
  const link = document.createElement("a");
  link.href = "/files/CoverLetter.pdf";
  link.download = "CoverLetter.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
