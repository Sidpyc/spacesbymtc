const VideoSplashScreen = ({ onVideoEnd }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <video 
                src="/videos/logoReveal.mp4" 
                className="w-full h-auto max-w-full max-h-full object-cover"
                autoPlay 
                muted 
                onEnded={onVideoEnd}
            />
        </div>
    );
};

export default VideoSplashScreen;
