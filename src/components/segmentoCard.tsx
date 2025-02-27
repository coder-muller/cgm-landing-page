import Link from "next/link";

interface SegmentoCardProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function SegmentoCard({ href, icon: Icon, title, description }: SegmentoCardProps) {
  return (
    <Link 
      href={href} 
      className="border rounded-lg p-6 hover:shadow-md transition-shadow text-center block"
    >
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-blue-700" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
    </Link>
  );
}
