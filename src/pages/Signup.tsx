import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';

const Signup: React.FC = () => {
  const { t } = useLanguage();
  const { signup, isLoading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    userRole: 'expenseTracker' as 'creditor' | 'debtor' | 'both' | 'expenseTracker',
    totalMoney: 0,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error(t.auth.passwordMismatch);
      return;
    }
    const success = await signup(formData);
    if (success) {
      toast.success(t.auth.signupSuccess);
      navigate('/dashboard');
    } else {
      toast.error(t.auth.phoneExists);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (value: string) => {
    setFormData({
      ...formData,
      userRole: value as 'creditor' | 'debtor' | 'both' | 'expenseTracker',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">{t.auth.signup}</CardTitle>
          <CardDescription className="text-center">
            {t.auth.signupSubtitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">{t.auth.fullName}</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">{t.auth.phoneNumber}</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="+1234567890"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t.auth.password}</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">{t.auth.confirmPassword}</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t.auth.userRole}</Label>
              <RadioGroup value={formData.userRole} onValueChange={handleRoleChange}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="creditor" id="creditor" />
                  <Label htmlFor="creditor">{t.auth.creditor}</Label>
                </div>
                <p className="text-xs text-muted-foreground ml-6">{t.auth.creditorDesc}</p>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="debtor" id="debtor" />
                  <Label htmlFor="debtor">{t.auth.debtor}</Label>
                </div>
                <p className="text-xs text-muted-foreground ml-6">{t.auth.debtorDesc}</p>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="both" />
                  <Label htmlFor="both">{t.auth.both}</Label>
                </div>
                <p className="text-xs text-muted-foreground ml-6">{t.auth.bothDesc}</p>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="expenseTracker" id="expenseTracker" />
                  <Label htmlFor="expenseTracker">{t.auth.expenseTracker}</Label>
                </div>
                <p className="text-xs text-muted-foreground ml-6">{t.auth.expenseTrackerDesc}</p>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? t.common.loading : t.auth.createAccount}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            {t.auth.hasAccount}{' '}
            <Link to="/login" className="text-primary hover:underline">
              {t.auth.login}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;