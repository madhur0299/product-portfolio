type CoachDemoVideoProps = {
  className?: string;
};

export function CoachDemoVideo({ className }: CoachDemoVideoProps) {
  return (
    <video
      className={`block aspect-[9/16] w-full bg-black object-cover ${className ?? ""}`}
      controls
      playsInline
      preload="metadata"
      poster="/images/coach/ios/home-dashboard.png"
      aria-label="Coach product walkthrough showing workout logging"
    >
      <source src="/videos/coach-product-demo.mp4" type="video/mp4" />
      Your browser does not support this product walkthrough video.
    </video>
  );
}
