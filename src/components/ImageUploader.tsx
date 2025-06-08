
import React, { useCallback, useState } from 'react';
import { Upload, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

interface ImageUploaderProps {
  onFileUpload: (file: File) => void;
  onBack: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileUpload, onBack }) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "🌙 NERA needs an image",
        description: "Please upload a photo (JPG, PNG, WebP)",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast({
        title: "🌙 File too large",
        description: "Please choose an image under 10MB",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (preview) {
      // Convert preview back to file for processing
      fetch(preview)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], "uploaded-image.jpg", { type: "image/jpeg" });
          onFileUpload(file);
        });
    }
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="text-violet-600 hover:text-violet-800 hover:bg-violet-50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to sanctuary
        </Button>
      </div>

      <Card className="bg-white/80 backdrop-blur-sm border-violet-200 shadow-lg">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-violet-900 mb-4 font-serif">
              Upload a Memory
            </h2>
            <p className="text-violet-600 text-lg">
              Let NERA embrace and protect what matters to you
            </p>
          </div>

          {!preview ? (
            <div
              className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-violet-400 bg-violet-50' 
                  : 'border-violet-300 hover:border-violet-400 hover:bg-violet-25'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-6 bg-violet-100 rounded-full">
                    <Upload className="h-12 w-12 text-violet-500" />
                  </div>
                </div>
                
                <div>
                  <p className="text-xl text-violet-700 font-medium mb-2">
                    Drop your image here, or click to choose
                  </p>
                  <p className="text-violet-500">
                    JPG, PNG, WebP • Max 10MB • Protected with love
                  </p>
                </div>
                
                <Button 
                  type="button"
                  className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-3 rounded-full"
                >
                  <ImageIcon className="h-5 w-5 mr-2" />
                  Choose Image
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden bg-violet-50 p-4">
                <img 
                  src={preview} 
                  alt="Preview" 
                  className="max-w-full h-auto mx-auto rounded-lg shadow-md max-h-96 object-contain"
                />
              </div>
              
              <div className="text-center space-y-4">
                <p className="text-violet-600 text-lg">
                  🌙 Beautiful. NERA is ready to protect this memory.
                </p>
                
                <div className="flex gap-4 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setPreview(null)}
                    className="border-violet-300 text-violet-600 hover:bg-violet-50"
                  >
                    Choose Different
                  </Button>
                  
                  <Button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-3 rounded-full"
                  >
                    <Upload className="h-5 w-5 mr-2" />
                    Begin Protection
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 p-4 bg-violet-50 rounded-lg border border-violet-200">
            <p className="text-violet-700 text-sm text-center">
              <strong>🕊️ Privacy Promise:</strong> Your image will be automatically deleted within 1 hour. 
              NERA never stores, tracks, or shares your memories.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageUploader;
