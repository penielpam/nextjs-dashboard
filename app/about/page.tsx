import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/AboutPage';
import About from '@/app/ui/AboutPage';
 
export default function AboutPage() {
  return (
    <main className="flex items-center justify-center">
      <div className="relative  flex  flex-col ">
        <div className="flex h-20 w-full items-end rounded-lg bg-violet-500 p-3">         
        </div>
        <About />
      </div>
    </main>
  );
}