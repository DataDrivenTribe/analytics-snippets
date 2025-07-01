/*
  Title: File download tracker
  Docs: https://datadriventribe.com/blog/file-download-tracking
  Author: Data Driven Tribe
  License: MIT – see LICENSE in repo
*/

(function () {
  // Add or remove file extensions you want to track
  const extensions = ['pdf', 'docx', 'xlsx', 'zip', 'csv', 'pptx'];

  // Map URL path fragments to file categories (used as a custom parameter)
  // You can adjust these to match your folder structure or naming logic
  const categories = {
    '/guides/': 'Guide',
    '/whitepapers/': 'Whitepaper',
    '/specs/': 'Specification'
  };

  function getFileCategory(url) {
    try {
      const path = new URL(url).pathname.toLowerCase();
      for (const prefix in categories) {
        if (path.includes(prefix)) return categories[prefix];
      }
    } catch (e) {}
    return 'Other';
  }

  function isDownload(link) {
    if (!link || !link.href) return false;
    const url = link.href.toLowerCase().split('?')[0].split('#')[0];
    return extensions.some(ext => url.endsWith('.' + ext));
  }

  function onClick(e) {
    const link = e.target.closest('a');
    if (!isDownload(link)) return;

    const url = link.href;
    const fileName = url.split('/').pop().split('?')[0];
    const fileExt = fileName.split('.').pop();
    const category = getFileCategory(url);

    /* global gtag */
    gtag('event', 'file_download_custom', {
      event_category: 'Downloads',
      event_label: fileName,
      file_name: fileName,
      file_extension: fileExt,
      file_url: url,
      file_category: category
    });
  }

  document.addEventListener('click', onClick, true);
})();
