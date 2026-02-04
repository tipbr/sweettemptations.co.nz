module.exports = function() {
  // Ordered list of gallery images with optional custom titles
  // Images are displayed in this exact order
  const images = [
    { filename: 'Photo-6-01-22-8-17-45-AM-scaled.jpg' },
    { filename: 'Photo-6-01-22-8-17-10-AM-scaled.jpg' },
    { filename: 'Photo-25-11-21-7-20-51-AM-scaled.jpg' },
    { filename: 'Photo-26-04-21-4-52-22-PM-scaled.jpg' },
    { filename: 'Photo-28-01-22-7-40-20-AM-scaled.jpg' },
    { filename: 'Photo-28-01-22-7-43-14-AM-scaled.jpg' },
    { filename: 'Photo-26-04-21-4-40-15-PM-scaled.jpg' },
    { filename: 'Photo-26-02-18-8-28-59-PM-scaled.jpg' },
    { filename: 'Photo-21-07-21-7-53-32-AM-scaled.jpg' },
    { filename: 'Photo-21-07-20-1-19-46-PM-scaled.jpg' },
    { filename: 'Photo-25-04-21-2-59-14-PM-scaled.jpg' },
    { filename: 'Photo-25-04-21-3-32-08-PM-scaled.jpg' },
    { filename: 'Photo-23-10-21-10-15-21-AM-scaled.jpg' },
    { filename: 'Photo-23-10-21-10-15-32-AM-scaled.jpg' },
    { filename: 'Photo-23-10-21-10-16-16-AM-scaled.jpg' },
    { filename: 'Photo-26-02-18-8-27-57-PM-scaled.jpg' },
    { filename: 'Photo-21-07-21-7-53-21-AM-scaled.jpg' },
    { filename: 'Photo-21-07-21-7-53-06-AM-scaled.jpg' },
    { filename: 'Photo-19-01-22-7-26-55-AM-scaled.jpg' },
    { filename: 'Photo-20-11-21-7-07-40-AM-scaled.jpg' },
    { filename: 'Photo-20-11-21-7-06-48-AM-scaled.jpg' },
    { filename: 'Photo-7-11-20-6-04-48-PM-scaled.jpg' },
    { filename: 'Photo-5-08-21-7-07-34-PM-scaled.jpg' },
    { filename: 'Photo-6-01-22-8-16-59-AM-scaled.jpg' },
    { filename: 'Photo-7-11-20-2-39-19-PM-scaled.jpg' },
    { filename: 'Photo-6-01-22-8-24-49-AM-scaled.jpg' },
    { filename: 'Photo-6-01-22-8-25-09-AM-scaled.jpg' },
    { filename: 'Photo-6-01-22-8-26-50-AM-scaled.jpg' },
    { filename: 'Photo-7-11-20-6-04-18-PM-scaled.jpg' },
    { filename: 'Photo-7-11-20-6-04-26-PM-scaled.jpg' },
    { filename: 'Photo-11-12-21-9-05-03-AM-scaled.jpg' },
    { filename: 'Photo-11-12-21-9-04-49-AM-scaled.jpg' },
    { filename: 'Photo-4-04-21-1-21-28-PM-scaled.jpg' },
    { filename: 'Photo-4-04-21-1-21-01-PM-scaled.jpg' },
    { filename: 'Photo-30-10-20-1-44-09-PM-scaled.jpg' },
    { filename: 'Photo-27-02-21-9-41-56-AM-scaled.jpg' },
    { filename: 'Photo-28-01-22-7-39-56-AM-scaled.jpg' },
    { filename: 'Photo-30-10-20-1-46-08-PM-scaled.jpg' },
    { filename: 'FDC0878D-ED80-47E6-946A-63A51D896C94-scaled.jpeg' },
    { filename: 'FDA3F452-3DAB-42FD-A60B-187DDA1EBFED-scaled.jpeg' }
  ];

  // Process images to add path and default alt text
  return images.map(image => ({
    filename: image.filename,
    path: `/gallery/${image.filename}`,
    title: image.title || '', // Optional title, defaults to empty string
    alt: image.alt || 'Sweet Temptations custom creation'
  }));
};
