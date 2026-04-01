import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../components/ui/alert-dialog';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { toast } from 'sonner';
import { User, Settings, Trash2, Key } from 'lucide-react';

const MyAccount: React.FC = () => {
  const { user, updateUser, deleteAccount, resetPassword } = useAuth();
  const { t } = useLanguage();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isResetPasswordDialogOpen, setIsResetPasswordDialogOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({
    fullName: user?.fullName || '',
    phoneNumber: user?.phoneNumber || '',
    idNumber: user?.idNumber || '',
    address: user?.address || '',
    idPhoto: user?.idPhoto || '',
  });
  const [passwordFormData, setPasswordFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(editFormData);
    toast.success(t.myAccount.profileUpdated);
    setIsEditDialogOpen(false);
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordFormData.newPassword !== passwordFormData.confirmNewPassword) {
      toast.error(t.auth.passwordMismatch);
      return;
    }
    const success = await resetPassword(passwordFormData.currentPassword, passwordFormData.newPassword);
    if (success) {
      toast.success(t.myAccount.passwordUpdated);
      setIsResetPasswordDialogOpen(false);
      setPasswordFormData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    } else {
      toast.error(t.myAccount.incorrectPassword);
    }
  };

  const handleDeleteAccount = async () => {
    const success = await deleteAccount();
    if (success) {
      toast.success(t.myAccount.accountDeleted);
    }
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordFormData({
      ...passwordFormData,
      [e.target.name]: e.target.value,
    });
  };

  if (!user) return null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t.myAccount.title}</h1>
        <p className="text-muted-foreground">{t.myAccount.subtitle}</p>
      </div>

      {/* Profile Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            {t.myAccount.profileSummary}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium">{t.myAccount.fullName}</Label>
              <p className="text-sm text-muted-foreground">{user.fullName}</p>
            </div>
            <div>
              <Label className="text-sm font-medium">{t.myAccount.phoneNumber}</Label>
              <p className="text-sm text-muted-foreground">{user.phoneNumber}</p>
            </div>
            <div>
              <Label className="text-sm font-medium">{t.myAccount.idNumber}</Label>
              <p className="text-sm text-muted-foreground">{user.idNumber || 'Not provided'}</p>
            </div>
            <div>
              <Label className="text-sm font-medium">{t.myAccount.address}</Label>
              <p className="text-sm text-muted-foreground">{user.address || 'Not provided'}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  {t.myAccount.editProfile}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>{t.myAccount.editProfile}</DialogTitle>
                  <DialogDescription>{t.myAccount.editProfileDesc}</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleEditSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">{t.myAccount.fullName}</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={editFormData.fullName}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phoneNumber">{t.myAccount.phoneNumber}</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={editFormData.phoneNumber}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="idNumber">{t.myAccount.idNumber}</Label>
                    <Input
                      id="idNumber"
                      name="idNumber"
                      value={editFormData.idNumber}
                      onChange={handleEditChange}
                      placeholder={t.myAccount.idNumber}
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">{t.myAccount.address}</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={editFormData.address}
                      onChange={handleEditChange}
                      placeholder={t.myAccount.addressOptional}
                    />
                  </div>
                  <div>
                    <Label htmlFor="idPhoto">{t.myAccount.idPhoto}</Label>
                    <Input
                      id="idPhoto"
                      name="idPhoto"
                      value={editFormData.idPhoto}
                      onChange={handleEditChange}
                      placeholder={t.myAccount.idPhotoOptional}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {t.myAccount.idPhotoHelp}
                    </p>
                  </div>
                  <Button type="submit" className="w-full">
                    {t.myAccount.saveChanges}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={isResetPasswordDialogOpen} onOpenChange={setIsResetPasswordDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Key className="mr-2 h-4 w-4" />
                  {t.myAccount.resetPassword}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{t.myAccount.resetPasswordTitle}</DialogTitle>
                  <DialogDescription>{t.myAccount.resetPasswordDesc}</DialogDescription>
                </DialogHeader>
                <form onSubmit={handlePasswordReset} className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">{t.myAccount.currentPassword}</Label>
                    <Input
                      id="currentPassword"
                      name="currentPassword"
                      type="password"
                      value={passwordFormData.currentPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">{t.myAccount.newPassword}</Label>
                    <Input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      value={passwordFormData.newPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmNewPassword">{t.myAccount.confirmNewPassword}</Label>
                    <Input
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      type="password"
                      value={passwordFormData.confirmNewPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {t.myAccount.saveChanges}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600">{t.myAccount.deleteAccount}</CardTitle>
          <CardDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                {t.myAccount.deleteAccount}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{t.myAccount.deleteAccountTitle}</AlertDialogTitle>
                <AlertDialogDescription>
                  {t.myAccount.deleteAccountDesc}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{t.common.cancel}</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700">
                  {t.myAccount.deleteAccountConfirm}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyAccount;