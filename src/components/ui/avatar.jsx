import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function ExampleComponent() {
  return (
    <div className="space-y-6">
      {/* Basic Avatar */}
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
      </div>

      {/* Avatar with Fallback Only */}
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </div>

      {/* Different Sizes */}
      <div className="flex items-center space-x-4">
        <Avatar className="h-8 w-8">
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        
        <Avatar className="h-12 w-12">
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        
        <Avatar className="h-16 w-16">
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
      </div>

      {/* User Profile with Avatar */}
      <div className="flex items-center space-x-3 p-4 border rounded-lg">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>
      </div>

      {/* Avatar Group */}
      <div className="flex -space-x-2">
        <Avatar className="border-2 border-white">
          <AvatarImage src="https://github.com/user1.png" />
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white">
          <AvatarImage src="https://github.com/user2.png" />
          <AvatarFallback>U2</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white">
          <AvatarFallback>+3</AvatarFallback>
        </Avatar>
      </div>

      {/* Custom Styled Avatar */}
      <div className="flex space-x-4">
        <Avatar className="ring-2 ring-primary ring-offset-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-primary text-primary-foreground">CN</AvatarFallback>
        </Avatar>
        
        <Avatar className="border-2 border-dashed border-gray-300">
          <AvatarFallback className="bg-gray-100">Add</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default ExampleComponent;