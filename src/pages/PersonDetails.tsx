import React from 'react';
import { useParams, Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const PersonDetails: React.FC = () => {
  const { personId } = useParams();
  const { t } = useLanguage();

  // Mock data - in real app, fetch based on personId
  const person = {
    id: personId,
    name: 'John Doe',
    owesYou: 150,
    youOwe: 0,
    transactions: [
      {
        id: '1',
        type: 'debt' as const,
        amount: 150,
        date: new Date('2024-01-15'),
        description: 'Laptop repair',
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/people">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.common.back || 'Back'}
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{person.name}</h1>
          <p className="text-muted-foreground">{t.people.personDetails}</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t.people.totalOwed}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${person.owesYou}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t.people.totalOwing}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${person.youOwe}</div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>{t.people.transactionHistory}</CardTitle>
          <CardDescription>{t.people.transactionHistory}</CardDescription>
        </CardHeader>
        <CardContent>
          {person.transactions.length > 0 ? (
            <div className="space-y-4">
              {person.transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 border rounded">
                  <div>
                    <div className="font-medium">{transaction.description}</div>
                    <div className="text-sm text-muted-foreground">
                      {transaction.date.toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={transaction.type === 'debt' ? 'default' : 'secondary'}>
                      {t.people[transaction.type]}
                    </Badge>
                    <span className="font-medium">${transaction.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              {t.people.noHistory}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonDetails;