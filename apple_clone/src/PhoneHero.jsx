
import iphoneVide from '../src/assets/macbook.mp4'; // adjust path as needed

const PhoneHero = () => {
  return (
    <div className="relative w-full bg-white text-black overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-8">
        <h1 className="text-2xl font-semibold">U Dream it</h1>
        <p className="text-sm">Mac will do it.</p>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-[550px] overflow-hidden">
        <video
          src={iphoneVide}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Overlay UI on Video */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white pointer-events-none">
          {/* Simulated Zoom Slider */}
          <div className="mb-8">
            <div className="w-40 h-1 bg-white/40 rounded relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-1 w-1.5 bg-yellow-400 rounded" />
            </div>
          </div>

          {/* Zoom Level Text */}
          <div className="text-yellow-400 text-3xl font-bold mt-4">1.1×</div>
        </div>
      </div>
    </div>
  );
};

export default PhoneHero;
