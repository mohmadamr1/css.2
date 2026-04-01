import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, DollarSign, CreditCard, MapPin, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  const stats = [
    {
      title: t.dashboard.totalMoney,
      value: `$${user?.totalMoney || 0}`,
      description: t.dashboard.availableBalance,
      icon: DollarSign,
    },
    {
      title: t.dashboard.totalSpent,
      value: '$1,250',
      description: t.dashboard.thisMonth,
      icon: CreditCard,
    },
    {
      title: t.dashboard.activeDebts,
      value: '3',
      description: t.dashboard.totalTransactions,
      icon: Users,
    },
    {
      title: t.dashboard.trips,
      value: '2',
      description: t.dashboard.plannedTrips,
      icon: MapPin,
    },
  ];

  const quickActions = [
    {
      title: t.dashboard.myAccountCard,
      description: t.dashboard.myAccountDesc,
      action: t.dashboard.goTo,
      path: '/my-account',
    },
    {
      title: t.dashboard.myMoneyCard,
      description: t.dashboard.myMoneyDesc,
      action: t.dashboard.goTo,
      path: '/my-money',
    },
    {
      title: t.dashboard.debtsCard,
      description: t.dashboard.debtsDesc,
      action: t.dashboard.goTo,
      path: '/debts',
    },
    {
      title: t.dashboard.tripCard,
      description: t.dashboard.tripDesc,
      action: t.dashboard.goTo,
      path: '/trip',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {t.dashboard.title}, {user?.fullName?.split(' ')[0]}!
        </h1>
        <p className="text-muted-foreground">
          {t.dashboard.subtitle}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{action.title}</CardTitle>
              <CardDescription>{action.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                {action.action}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;