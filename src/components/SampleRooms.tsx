import React from 'react';

const sampleRooms = [
  {
    id: 'living-room',
    name: 'Modern Living Room',
    imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'bedroom',
    name: 'Cozy Bedroom',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'kitchen',
    name: 'Modern Kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

interface SampleRoomsProps {
  onSelectSample: (imageUrl: string) => void;
}

const SampleRooms: React.FC<SampleRoomsProps> = ({ onSelectSample }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Or try with our sample rooms</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {sampleRooms.map(room => (
          <div 
            key={room.id}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => onSelectSample(room.imageUrl)}
          >
            <img 
              src={room.imageUrl} 
              alt={room.name} 
              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 transition-opacity group-hover:bg-opacity-30">
              <p className="text-white font-medium">{room.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleRooms;