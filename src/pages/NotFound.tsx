import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center justify-center py-12 px-6 text-center">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <h1 className="text-2xl font-bold mb-2">{t.notFound.title}</h1>
          <p className="text-muted-foreground mb-6">{t.notFound.subtitle}</p>
          <Link to="/dashboard">
            <Button>
              <Home className="mr-2 h-4 w-4" />
              {t.notFound.goHome}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;