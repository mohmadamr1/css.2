import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../context/LanguageContext';
import { Users, ArrowRight } from 'lucide-react';

interface Person {
  id: string;
  name: string;
  owesYou: number;
  youOwe: number;
  transactions: Transaction[];
}

interface Transaction {
  id: string;
  type: 'debt' | 'income' | 'expense';
  amount: number;
  date: Date;
  description: string;
}

const People: React.FC = () => {
  const { t } = useLanguage();

  // Mock data
  const [people] = React.useState<Person[]>([
    {
      id: '1',
      name: 'Alice Johnson',
      owesYou: 150,
      youOwe: 0,
      transactions: [
        {
          id: '1',
          type: 'debt',
          amount: 150,
          date: new Date('2024-01-15'),
          description: 'Laptop repair',
        },
      ],
    },
    {
      id: '2',
      name: 'Bob Smith',
      owesYou: 0,
      youOwe: 75,
      transactions: [
        {
          id: '2',
          type: 'debt',
          amount: 75,
          date: new Date('2024-01-20'),
          description: 'Dinner bill',
        },
      ],
    },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t.people.title}</h1>
        <p className="text-muted-foreground">{t.people.subtitle}</p>
      </div>

      {/* People List */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {people.length > 0 ? (
          people.map((person) => (
            <Card key={person.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{person.name}</span>
                  <div className="flex gap-2">
                    {person.owesYou > 0 && (
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {t.people.owesYou}: ${person.owesYou}
                      </Badge>
                    )}
                    {person.youOwe > 0 && (
                      <Badge variant="destructive">
                        {t.people.youOwe}: ${person.youOwe}
                      </Badge>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{t.people.totalOwed}:</span>
                    <span className="font-medium text-green-600">${person.owesYou}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{t.people.totalOwing}:</span>
                    <span className="font-medium text-red-600">${person.youOwe}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  {t.people.viewTransactions}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="md:col-span-2 lg:col-span-3">
            <CardContent className="flex flex-col items-center justify-center py-8">
              <Users className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">{t.people.peopleList}</h3>
              <p className="text-muted-foreground text-center mt-2">
                {t.people.noTransactions}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default People;