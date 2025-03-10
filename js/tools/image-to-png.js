// Image to PNG Converter Tool

class ImageToPNGConverter {
    constructor() {
        this.uploadBox = document.getElementById('uploadBox');
        this.fileInput = document.getElementById('fileInput');
        this.originalPreview = document.getElementById('originalPreview');
        this.convertedPreview = document.getElementById('convertedPreview');
        this.convertBtn = document.getElementById('convertBtn');
        this.downloadBtn = document.getElementById('downloadBtn');
        this.qualitySlider = document.getElementById('quality');
        this.transparencyCheckbox = document.getElementById('transparency');
        
        this.originalImage = null;
        this.convertedImage = null;
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Handle drag and drop
        this.uploadBox.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.uploadBox.classList.add('dragover');
        });

        this.uploadBox.addEventListener('dragleave', () => {
            this.uploadBox.classList.remove('dragover');
        });

        this.uploadBox.addEventListener('drop', (e) => {
            e.preventDefault();
            this.uploadBox.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                this.handleFile(file);
            }
        });

        // Handle click to upload
        this.uploadBox.addEventListener('click', () => {
            this.fileInput.click();
        });

        this.fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.handleFile(file);
            }
        });

        // Handle conversion
        this.convertBtn.addEventListener('click', () => {
            this.convertToPNG();
        });

        // Handle download
        this.downloadBtn.addEventListener('click', () => {
            this.downloadPNG();
        });

        // Handle quality change
        this.qualitySlider.addEventListener('input', () => {
            if (this.originalImage) {
                this.convertToPNG();
            }
        });

        // Handle transparency toggle
        this.transparencyCheckbox.addEventListener('change', () => {
            if (this.originalImage) {
                this.convertToPNG();
            }
        });
    }

    handleFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.originalImage = new Image();
            this.originalImage.onload = () => {
                this.displayOriginalImage();
                this.convertToPNG();
                this.convertBtn.disabled = false;
            };
            this.originalImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    displayOriginalImage() {
        this.originalPreview.innerHTML = '';
        const img = document.createElement('img');
        img.src = this.originalImage.src;
        img.className = 'img-fluid';
        this.originalPreview.appendChild(img);
    }

    convertToPNG() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions
        canvas.width = this.originalImage.width;
        canvas.height = this.originalImage.height;

        // Draw image
        ctx.drawImage(this.originalImage, 0, 0);

        // Convert to PNG with quality settings
        const quality = this.qualitySlider.value / 100;
        const preserveTransparency = this.transparencyCheckbox.checked;

        // Convert to PNG
        this.convertedImage = canvas.toDataURL('image/png', quality);
        
        // Display converted image
        this.convertedPreview.innerHTML = '';
        const img = document.createElement('img');
        img.src = this.convertedImage;
        img.className = 'img-fluid';
        this.convertedPreview.appendChild(img);

        // Enable download button
        this.downloadBtn.disabled = false;
    }

    downloadPNG() {
        if (!this.convertedImage) return;

        const link = document.createElement('a');
        link.download = 'converted-image.png';
        link.href = this.convertedImage;
        link.click();
    }
}

// Initialize the converter when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ImageToPNGConverter();
}); 