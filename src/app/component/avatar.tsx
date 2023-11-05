'use client'

import { ChangeEvent, useState, useRef, forwardRef } from "react";
import Image from 'next/image';

const Avatar = () => {
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        
    }

    const openFileBrowser = () => {

        const input = document.createElement("input");
        input.type = "file";
        input.accept="image/*";
        input.onchange = (e) => {
            const file = input.files?.[0];
            const reader = new FileReader();

            reader.onload = () => {
                setAvatarUrl(reader.result as string);
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        };
        input.click();
        
    }

    return (
        <div className="border-solid border border-gray-300 w-[200px] h-[200px] m-6 rounded-lg">
          
       
          {!avatarUrl && (
            <button className="w-full h-full flex items-center justify-center border-none bg-transparent underline text-black cursor-pointer" onClick={openFileBrowser}> Add photo or Avatar</button>
          )}

          {avatarUrl && (
            <Image
              src={avatarUrl}
              alt="Avatar"
              width={200}
              height={200}
              onClick={openFileBrowser}
            />
          )}
        </div>
      );
    };
    
    export default forwardRef(Avatar);