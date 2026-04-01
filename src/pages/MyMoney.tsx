import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { toast } from 'sonner';
import { Plus, DollarSign, TrendingUp, PiggyBank, Receipt, Trash2 } from 'lucide-react';

interface Expense {
  id: string;
  amount: number;
  category: string;
  date: Date;
  note?: string;
}

interface BudgetItem {
  id: string;
  itemName: string;
  amount: number;
  dueDate?: Date;
}

const MyMoney: React.FC = () => {
  const { user, updateUser } = useAuth();
  const { t } = useLanguage();
  const [isExpenseDialogOpen, setIsExpenseDialogOpen] = useState(false);
  const [isBudgetDialogOpen, setIsBudgetDialogOpen] = useState(false);
  const [expenseFormData, setExpenseFormData] = useState({
    amount: '',
    category: '',
    date: '',
    note: '',
  });
  const [budgetFormData, setBudgetFormData] = useState({
    itemName: '',
    amount: '',
    dueDate: '',
  });

  // Mock data
  const [expenses] = useState<Expense[]>([
    {
      id: '1',
      amount: 50,
      category: 'food',
      date: new Date('2024-01-15'),
      note: 'Lunch at restaurant',
    },
    {
      id: '2',
      amount: 25,
      category: 'transportation',
      date: new Date('2024-01-14'),
      note: 'Bus fare',
    },
  ]);

  const [budgetItems] = useState<BudgetItem[]>([
    {
      id: '1',
      itemName: 'Rent',
      amount: 1200,
      dueDate: new Date('2024-02-01'),
    },
    {
      id: '2',
      itemName: 'Electricity',
      amount: 150,
      dueDate: new Date('2024-02-15'),
    },
  ]);

  const handleAddExpense = () => {
    // Mock add expense
    toast.success(t.myMoney.expenseAdded);
    setIsExpenseDialogOpen(false);
    setExpenseFormData({ amount: '', category: '', date: '', note: '' });
  };

  const handleAddBudgetItem = () => {
    // Mock add budget item
    toast.success(t.myMoney.budgetItemAdded);
    setIsBudgetDialogOpen(false);
    setBudgetFormData({ itemName: '', amount: '', dueDate: '' });
  };

  const handleDeleteExpense = (_id: string) => {
    // Mock delete expense
    toast.success(t.myMoney.expenseDeleted);
  };

  const handleDeleteBudgetItem = (_id: string) => {
    // Mock delete budget item
    toast.success(t.myMoney.budgetItemDeleted);
  };

  const handleUpdateTotalMoney = () => {
    const newAmount = prompt('Enter new total money amount:');
    if (newAmount && !isNaN(Number(newAmount))) {
      updateUser({ totalMoney: Number(newAmount) });
      toast.success(t.myMoney.totalMoneyUpdated);
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'food': return t.myMoney.categoryFood;
      case 'transportation': return t.myMoney.categoryTransportation;
      case 'shopping': return t.myMoney.categoryShopping;
      case 'entertainment': return t.myMoney.categoryEntertainment;
      case 'bills': return t.myMoney.categoryBills;
      case 'healthcare': return t.myMoney.categoryHealthcare;
      default: return t.myMoney.categoryOther;
    }
  };

  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = (user?.totalMoney || 0) - totalSpent;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t.myMoney.title}</h1>
        <p className="text-muted-foreground">{t.myMoney.subtitle}</p>
      </div>

      {/* Money Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.myMoney.totalMoney}</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${user?.totalMoney || 0}</div>
            <Button variant="outline" size="sm" onClick={handleUpdateTotalMoney} className="mt-2">
              {t.myMoney.update}
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.myMoney.spentThisMonth}</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalSpent}</div>
            <p className="text-xs text-muted-foreground">
              {t.myMoney.availableBalance}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.myMoney.remaining}</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${remaining}</div>
            <p className="text-xs text-muted-foreground">
              {remaining >= 0 ? 'Positive balance' : 'Negative balance'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Expenses and Budget */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Expenses */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5" />
                  {t.myMoney.expenses}
                </CardTitle>
                <CardDescription>{t.myMoney.expensesDesc}</CardDescription>
              </div>
              <Dialog open={isExpenseDialogOpen} onOpenChange={setIsExpenseDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    {t.myMoney.addExpense}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{t.myMoney.addExpenseTitle}</DialogTitle>
                    <DialogDescription>{t.myMoney.addExpenseDesc}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="amount">{t.myMoney.amount}</Label>
                      <Input
                        id="amount"
                        type="number"
                        step="0.01"
                        value={expenseFormData.amount}
                        onChange={(e) => setExpenseFormData({...expenseFormData, amount: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">{t.myMoney.category}</Label>
                      <Select value={expenseFormData.category} onValueChange={(value) => setExpenseFormData({...expenseFormData, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder={t.myMoney.category} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="food">{t.myMoney.categoryFood}</SelectItem>
                          <SelectItem value="transportation">{t.myMoney.categoryTransportation}</SelectItem>
                          <SelectItem value="shopping">{t.myMoney.categoryShopping}</SelectItem>
                          <SelectItem value="entertainment">{t.myMoney.categoryEntertainment}</SelectItem>
                          <SelectItem value="bills">{t.myMoney.categoryBills}</SelectItem>
                          <SelectItem value="healthcare">{t.myMoney.categoryHealthcare}</SelectItem>
                          <SelectItem value="other">{t.myMoney.categoryOther}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date">{t.myMoney.date}</Label>
                      <Input
                        id="date"
                        type="date"
                        value={expenseFormData.date}
                        onChange={(e) => setExpenseFormData({...expenseFormData, date: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="note">{t.myMoney.note}</Label>
                      <Input
                        id="note"
                        placeholder={t.myMoney.noteOptional}
                        value={expenseFormData.note}
                        onChange={(e) => setExpenseFormData({...expenseFormData, note: e.target.value})}
                      />
                    </div>
                    <Button onClick={handleAddExpense} className="w-full">
                      {t.myMoney.addExpense}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            {expenses.length > 0 ? (
              <div className="space-y-2">
                {expenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <div className="font-medium">${expense.amount}</div>
                      <div className="text-sm text-muted-foreground">
                        {getCategoryLabel(expense.category)} • {expense.date.toLocaleDateString()}
                      </div>
                      {expense.note && (
                        <div className="text-sm text-muted-foreground">{expense.note}</div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteExpense(expense.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                {t.myMoney.noExpenses}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Budget */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <PiggyBank className="h-5 w-5" />
                  {t.myMoney.monthlyBudget}
                </CardTitle>
                <CardDescription>{t.myMoney.budgetDesc}</CardDescription>
              </div>
              <Dialog open={isBudgetDialogOpen} onOpenChange={setIsBudgetDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    {t.myMoney.addBudgetItem}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{t.myMoney.addBudgetTitle}</DialogTitle>
                    <DialogDescription>{t.myMoney.addBudgetDesc}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="itemName">{t.myMoney.itemName}</Label>
                      <Input
                        id="itemName"
                        placeholder={t.myMoney.itemNamePlaceholder}
                        value={budgetFormData.itemName}
                        onChange={(e) => setBudgetFormData({...budgetFormData, itemName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="budgetAmount">{t.myMoney.amount}</Label>
                      <Input
                        id="budgetAmount"
                        type="number"
                        step="0.01"
                        value={budgetFormData.amount}
                        onChange={(e) => setBudgetFormData({...budgetFormData, amount: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="dueDate">{t.myMoney.dueDate}</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        value={budgetFormData.dueDate}
                        onChange={(e) => setBudgetFormData({...budgetFormData, dueDate: e.target.value})}
                      />
                    </div>
                    <Button onClick={handleAddBudgetItem} className="w-full">
                      {t.myMoney.addToBudget}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            {budgetItems.length > 0 ? (
              <div className="space-y-2">
                {budgetItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <div className="font-medium">{item.itemName}</div>
                      <div className="text-sm text-muted-foreground">
                        ${item.amount}
                        {item.dueDate && ` • Due: ${item.dueDate.toLocaleDateString()}`}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteBudgetItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                {t.myMoney.noBudgetItems}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MyMoney;