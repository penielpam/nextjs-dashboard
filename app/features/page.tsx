import Features from '@/app/ui/FeaturesPage';
 
export default function FeaturesPage() {
  return (
    <main className="flex items-center justify-center">
      <div className="relative  flex  flex-col ">
        <div className="flex h-20 w-full items-end rounded-lg bg-violet-500 p-3">         
        </div>
        <Features/>
      </div>
    </main>
  );
}