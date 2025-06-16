// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRive } from '@rive-app/react-canvas';

const SignUp = () => {
  const { RiveComponent } = useRive({
    src: '/reasons_to_watch.riv',
    autoplay: true,
    artboard: 'Main Reason to watch',
    stateMachines: 'reason to watch state machine',
  });

  return (
    <div className="bg-[#222222] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-2xl font-bold mb-8">
          Reasons To Sign Up Today
        </h2>
        
        {/* Single Rive Animation Container */}
        <div className="w-full max-w-2xl mx-auto h-auto">
          <RiveComponent 
            style={{ 
              width: '100%', 
              height: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;