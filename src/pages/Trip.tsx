import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { useLanguage } from '../context/LanguageContext';
import { toast } from 'sonner';
import { Plus, Users, UserPlus, Edit, Trash2 } from 'lucide-react';

interface Trip {
  id: string;
  tripName: string;
  date: Date;
  participants: Participant[];
}

interface Participant {
  id: string;
  name: string;
  totalPaid: number;
  expenses: Expense[];
}

interface Expense {
  id: string;
  amount: number;
  description: string;
}

const Trip: React.FC = () => {
  const { t } = useLanguage();
  const [isCreateTripDialogOpen, setIsCreateTripDialogOpen] = useState(false);
  const [isAddParticipantDialogOpen, setIsAddParticipantDialogOpen] = useState(false);
  const [isEditParticipantDialogOpen, setIsEditParticipantDialogOpen] = useState(false);
  const [tripFormData, setTripFormData] = useState({
    tripName: '',
    date: '',
  });
  const [participantFormData, setParticipantFormData] = useState({
    name: '',
  });

  // Mock data
  const [trips] = useState<Trip[]>([
    {
      id: '1',
      tripName: 'Beach Weekend',
      date: new Date('2024-02-15'),
      participants: [
        {
          id: '1',
          name: 'John Doe',
          totalPaid: 150,
          expenses: [
            { id: '1', amount: 50, description: 'Gas' },
            { id: '2', amount: 100, description: 'Hotel' },
          ],
        },
        {
          id: '2',
          name: 'Jane Smith',
          totalPaid: 75,
          expenses: [
            { id: '3', amount: 75, description: 'Food' },
          ],
        },
      ],
    },
  ]);

  const handleCreateTrip = () => {
    // Mock create trip
    toast.success(t.trip.tripCreated);
    setIsCreateTripDialogOpen(false);
    setTripFormData({ tripName: '', date: '' });
  };

  const handleAddParticipant = () => {
    // Mock add participant
    toast.success(t.trip.participantAdded);
    setIsAddParticipantDialogOpen(false);
    setParticipantFormData({ name: '' });
  };

  const handleEditParticipant = () => {
    // Mock edit participant
    toast.success(t.trip.participantUpdated);
    setIsEditParticipantDialogOpen(false);
  };

  const handleDeleteTrip = (_id: string) => {
    // Mock delete trip
    toast.success(t.trip.tripDeleted);
  };

  const handleRemoveParticipant = (_tripId: string, _participantId: string) => {
    // Mock remove participant
    toast.success(t.trip.participantRemoved);
  };

  const calculateTripTotals = (trip: Trip) => {
    const totalExpenses = trip.participants.reduce((sum, p) => sum + p.totalPaid, 0);
    const perPerson = trip.participants.length > 0 ? totalExpenses / trip.participants.length : 0;
    return { totalExpenses, perPerson };
  };

  const calculateParticipantBalance = (participant: Participant, perPerson: number) => {
    const balance = participant.totalPaid - perPerson;
    return {
      shouldReceive: balance > 0 ? balance : 0,
      shouldPay: balance < 0 ? Math.abs(balance) : 0,
    };
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t.trip.title}</h1>
          <p className="text-muted-foreground">{t.trip.subtitle}</p>
        </div>
        <Dialog open={isCreateTripDialogOpen} onOpenChange={setIsCreateTripDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              {t.trip.createNew}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t.trip.createTitle}</DialogTitle>
              <DialogDescription>{t.trip.createDesc}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="tripName">{t.trip.tripName}</Label>
                <Input
                  id="tripName"
                  placeholder={t.trip.tripNamePlaceholder}
                  value={tripFormData.tripName}
                  onChange={(e) => setTripFormData({...tripFormData, tripName: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="tripDate">{t.trip.date}</Label>
                <Input
                  id="tripDate"
                  type="date"
                  value={tripFormData.date}
                  onChange={(e) => setTripFormData({...tripFormData, date: e.target.value})}
                />
              </div>
              <Button onClick={handleCreateTrip} className="w-full">
                {t.trip.createTrip}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Trips List */}
      <div className="space-y-4">
        {trips.length > 0 ? (
          trips.map((trip) => {
            const { totalExpenses, perPerson } = calculateTripTotals(trip);
            return (
              <Card key={trip.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{trip.tripName}</CardTitle>
                      <CardDescription>
                        {trip.date.toLocaleDateString()} • {trip.participants.length} {t.trip.participants}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${totalExpenses}</div>
                      <div className="text-sm text-muted-foreground">
                        {t.trip.perPerson}: ${perPerson.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Participants */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{t.trip.participants}</h4>
                      <Dialog open={isAddParticipantDialogOpen} onOpenChange={setIsAddParticipantDialogOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                          >
                            <UserPlus className="h-4 w-4 mr-2" />
                            {t.trip.addParticipant}
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{t.trip.addParticipantTitle}</DialogTitle>
                            <DialogDescription>{t.trip.addParticipantDesc}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="participantName">{t.trip.participantName}</Label>
                              <Input
                                id="participantName"
                                placeholder={t.trip.participantNamePlaceholder}
                                value={participantFormData.name}
                                onChange={(e) => setParticipantFormData({...participantFormData, name: e.target.value})}
                              />
                            </div>
                            <Button onClick={handleAddParticipant} className="w-full">
                              {t.trip.addParticipant}
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    {trip.participants.length > 0 ? (
                      trip.participants.map((participant) => {
                        const { shouldReceive, shouldPay } = calculateParticipantBalance(participant, perPerson);
                        return (
                          <div key={participant.id} className="flex items-center justify-between p-3 border rounded">
                            <div className="flex-1">
                              <div className="font-medium">{participant.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {t.trip.totalPaid}: ${participant.totalPaid}
                              </div>
                              {shouldReceive > 0 && (
                                <div className="text-sm text-green-600">
                                  {t.trip.shouldReceive}: ${shouldReceive.toFixed(2)}
                                </div>
                              )}
                              {shouldPay > 0 && (
                                <div className="text-sm text-red-600">
                                  {t.trip.shouldPay}: ${shouldPay.toFixed(2)}
                                </div>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Dialog open={isEditParticipantDialogOpen} onOpenChange={setIsEditParticipantDialogOpen}>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>{t.trip.editParticipantTitle}</DialogTitle>
                                    <DialogDescription>{t.trip.editParticipantDesc}</DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div>
                                      <Label htmlFor="editParticipantName">{t.trip.name}</Label>
                                      <Input
                                        id="editParticipantName"
                                        value={participant.name}
                                        onChange={(_e) => {}}
                                      />
                                    </div>
                                    <Button onClick={handleEditParticipant} className="w-full">
                                      {t.trip.participantUpdated}
                                    </Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveParticipant(trip.id, participant.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">
                        {t.trip.noParticipants}
                      </div>
                    )}
                  </div>

                  {/* Delete Trip */}
                  <div className="mt-4 pt-4 border-t">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteTrip(trip.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      {t.common.delete} {t.trip.tripName.toLowerCase()}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <Users className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">{t.trip.noTrips}</h3>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Add Participant Dialog */}
      <Dialog open={isAddParticipantDialogOpen} onOpenChange={setIsAddParticipantDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t.trip.addParticipantTitle}</DialogTitle>
            <DialogDescription>{t.trip.addParticipantDesc}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="participantName">{t.trip.participantName}</Label>
              <Input
                id="participantName"
                placeholder={t.trip.participantNamePlaceholder}
                value={participantFormData.name}
                onChange={(e) => setParticipantFormData({...participantFormData, name: e.target.value})}
              />
            </div>
            <Button onClick={handleAddParticipant} className="w-full">
              {t.trip.addParticipant}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Trip;