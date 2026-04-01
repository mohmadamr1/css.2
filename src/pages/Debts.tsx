import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { useLanguage } from '../context/LanguageContext';
import { Plus, CreditCard, UserMinus, Copy, CheckCircle, XCircle, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface Debt {
  id: string;
  debtorName: string;
  amount: number;
  date: Date;
  installments: number;
  reason: string;
  debtNumber: string;
  status: 'pending' | 'accepted' | 'rejected';
  payments: Payment[];
}

interface Payment {
  id: string;
  amount: number;
  date: Date;
  status: 'pending' | 'accepted' | 'rejected';
}

const Debts: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'creditor' | 'debtor'>('creditor');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);

  // Mock data
  const [creditorDebts] = useState<Debt[]>([
    {
      id: '1',
      debtorName: 'Alice Johnson',
      amount: 500,
      date: new Date('2024-01-15'),
      installments: 2,
      reason: 'Laptop repair',
      debtNumber: 'DEBT-ABC123',
      status: 'accepted',
      payments: [
        { id: '1', amount: 250, date: new Date('2024-02-01'), status: 'accepted' },
        { id: '2', amount: 250, date: new Date('2024-03-01'), status: 'pending' },
      ],
    },
  ]);

  const [debtorDebts] = useState<Debt[]>([
    {
      id: '2',
      debtorName: 'Bob Smith',
      amount: 300,
      date: new Date('2024-01-20'),
      installments: 1,
      reason: 'Dinner bill',
      debtNumber: 'DEBT-XYZ789',
      status: 'accepted',
      payments: [],
    },
  ]);

  const handleCreateDebt = () => {
    // Mock create debt
    toast.success(t.debts.debtCreated);
    setIsCreateDialogOpen(false);
  };

  const handleJoinDebt = () => {
    // Mock join debt
    toast.success(t.debts.debtJoined);
    setIsJoinDialogOpen(false);
  };

  const handleMakePayment = () => {
    // Mock payment
    toast.success(t.debts.paymentSubmitted);
    setIsPaymentDialogOpen(false);
  };

  const copyDebtNumber = (debtNumber: string) => {
    navigator.clipboard.writeText(debtNumber);
    toast.success(t.debts.debtNumberCopied);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'accepted':
        return <Badge variant="default" className="bg-green-100 text-green-800">{t.debts.accepted}</Badge>;
      case 'rejected':
        return <Badge variant="destructive">{t.debts.rejected}</Badge>;
      default:
        return <Badge variant="secondary">{t.debts.pending}</Badge>;
    }
  };

  const getPaymentStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-yellow-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t.debts.title}</h1>
          <p className="text-muted-foreground">{t.debts.subtitle}</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                {t.debts.createNew}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t.debts.createTitle}</DialogTitle>
                <DialogDescription>{t.debts.createDesc}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="debtorName">{t.debts.debtorName}</Label>
                  <Input id="debtorName" placeholder={t.debts.debtorNamePlaceholder} />
                </div>
                <div>
                  <Label htmlFor="amount">{t.debts.amount}</Label>
                  <Input id="amount" type="number" />
                </div>
                <div>
                  <Label htmlFor="date">{t.debts.date}</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="installments">{t.debts.installments}</Label>
                  <Input id="installments" type="number" min="1" />
                </div>
                <div>
                  <Label htmlFor="reason">{t.debts.reason}</Label>
                  <Textarea id="reason" placeholder={t.debts.reasonPlaceholder} />
                </div>
                <Button onClick={handleCreateDebt} className="w-full">
                  {t.debts.createDebt}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isJoinDialogOpen} onOpenChange={setIsJoinDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <UserMinus className="mr-2 h-4 w-4" />
                {t.debts.joinDebt}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t.debts.joinTitle}</DialogTitle>
                <DialogDescription>{t.debts.joinDesc}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="debtNumber">{t.debts.debtNumber}</Label>
                  <Input id="debtNumber" placeholder={t.debts.debtNumberPlaceholder} />
                </div>
                <Button onClick={handleJoinDebt} className="w-full">
                  {t.debts.joinDebtButton}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg">
        <Button
          variant={activeTab === 'creditor' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('creditor')}
          className="flex-1"
        >
          {t.debts.moneyLent}
        </Button>
        <Button
          variant={activeTab === 'debtor' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('debtor')}
          className="flex-1"
        >
          {t.debts.moneyBorrowed}
        </Button>
      </div>

      {/* Debts List */}
      <div className="space-y-4">
        {activeTab === 'creditor' ? (
          creditorDebts.length > 0 ? (
            creditorDebts.map((debt) => (
              <Card key={debt.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {t.debts.lentTo} {debt.debtorName}
                        {getStatusBadge(debt.status)}
                      </CardTitle>
                      <CardDescription>
                        {debt.reason} • {debt.date.toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${debt.amount}</div>
                      <div className="text-sm text-muted-foreground">
                        {t.debts.paidAmount}: ${debt.payments.filter(p => p.status === 'accepted').reduce((sum, p) => sum + p.amount, 0)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{t.debts.debtNumber}:</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">{debt.debtNumber}</code>
                      <Button variant="ghost" size="sm" onClick={() => copyDebtNumber(debt.debtNumber)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsPaymentDialogOpen(true);
                      }}
                    >
                      {t.debts.makePayment}
                    </Button>
                  </div>

                  {/* Payment History */}
                  {debt.payments.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">{t.debts.paymentHistory}</h4>
                      <div className="space-y-2">
                        {debt.payments.map((payment) => (
                          <div key={payment.id} className="flex items-center justify-between p-2 bg-muted rounded">
                            <div className="flex items-center gap-2">
                              {getPaymentStatusIcon(payment.status)}
                              <span>${payment.amount}</span>
                              <span className="text-sm text-muted-foreground">
                                {payment.date.toLocaleDateString()}
                              </span>
                            </div>
                            <Badge variant={payment.status === 'accepted' ? 'default' : payment.status === 'rejected' ? 'destructive' : 'secondary'}>
                              {payment.status === 'accepted' ? t.debts.accepted : payment.status === 'rejected' ? t.debts.rejected : t.debts.pending}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <CreditCard className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">{t.debts.noCreditorDebts}</h3>
              </CardContent>
            </Card>
          )
        ) : (
          debtorDebts.length > 0 ? (
            debtorDebts.map((debt) => (
              <Card key={debt.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {t.debts.borrowedFrom} {debt.debtorName}
                        {getStatusBadge(debt.status)}
                      </CardTitle>
                      <CardDescription>
                        {debt.reason} • {debt.date.toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${debt.amount}</div>
                      <div className="text-sm text-muted-foreground">
                        {t.debts.remaining}: ${debt.amount - debt.payments.filter(p => p.status === 'accepted').reduce((sum, p) => sum + p.amount, 0)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsPaymentDialogOpen(true);
                    }}
                  >
                    {t.debts.makePayment}
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <CreditCard className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">{t.debts.noDebtorDebts}</h3>
              </CardContent>
            </Card>
          )
        )}
      </div>

      {/* Payment Dialog */}
      <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t.debts.makePaymentTitle}</DialogTitle>
            <DialogDescription>{t.debts.makePaymentDesc}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="paymentAmount">{t.debts.paymentAmount}</Label>
              <Input id="paymentAmount" type="number" />
            </div>
            <Button onClick={handleMakePayment} className="w-full">
              {t.debts.submitPayment}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Debts;