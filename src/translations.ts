export interface Translation {
  // Common
  common: {
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    add: string;
    close: string;
    search: string;
    loading: string;
    welcome: string;
    yes: string;
    no: string;
    confirm: string;
    viewDetails: string;
    back: string;
  };

  // Navigation
  nav: {
    dashboard: string;
    myAccount: string;
    myMoney: string;
    debts: string;
    trip: string;
    people: string;
    logout: string;
    welcomeUser: string;
  };

  // Auth
  auth: {
    login: string;
    signup: string;
    welcomeBack: string;
    loginSubtitle: string;
    createAccount: string;
    signupSubtitle: string;
    fullName: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    userRole: string;
    creditor: string;
    debtor: string;
    both: string;
    expenseTracker: string;
    creditorDesc: string;
    debtorDesc: string;
    bothDesc: string;
    expenseTrackerDesc: string;
    noAccount: string;
    hasAccount: string;
    loginSuccess: string;
    signupSuccess: string;
    invalidCredentials: string;
    passwordMismatch: string;
    phoneExists: string;
  };

  // Dashboard
  dashboard: {
    title: string;
    subtitle: string;
    totalMoney: string;
    totalSpent: string;
    activeDebts: string;
    trips: string;
    availableBalance: string;
    thisMonth: string;
    totalTransactions: string;
    plannedTrips: string;
    myAccountCard: string;
    myAccountDesc: string;
    myMoneyCard: string;
    myMoneyDesc: string;
    debtsCard: string;
    debtsDesc: string;
    tripCard: string;
    tripDesc: string;
    goTo: string;
  };

  // My Account
  myAccount: {
    title: string;
    subtitle: string;
    profileSummary: string;
    editProfile: string;
    editProfileDesc: string;
    fullName: string;
    phoneNumber: string;
    idNumber: string;
    address: string;
    addressOptional: string;
    idPhoto: string;
    idPhotoOptional: string;
    idPhotoHelp: string;
    userId: string;
    saveChanges: string;
    profileUpdated: string;
    deleteAccount: string;
    deleteAccountTitle: string;
    deleteAccountDesc: string;
    deleteAccountConfirm: string;
    accountDeleted: string;
    resetPassword: string;
    resetPasswordTitle: string;
    resetPasswordDesc: string;
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
    passwordUpdated: string;
    incorrectPassword: string;
  };

  // My Money
  myMoney: {
    title: string;
    subtitle: string;
    totalMoney: string;
    spentThisMonth: string;
    remaining: string;
    availableBalance: string;
    expenses: string;
    expensesDesc: string;
    monthlyBudget: string;
    budgetDesc: string;
    addExpense: string;
    addExpenseTitle: string;
    addExpenseDesc: string;
    addBudgetItem: string;
    addBudgetTitle: string;
    addBudgetDesc: string;
    amount: string;
    category: string;
    date: string;
    note: string;
    noteOptional: string;
    itemName: string;
    itemNamePlaceholder: string;
    dueDate: string;
    noExpenses: string;
    noBudgetItems: string;
    expenseAdded: string;
    expenseDeleted: string;
    budgetItemAdded: string;
    budgetItemDeleted: string;
    update: string;
    totalMoneyUpdated: string;
    addToBudget: string;
    categoryFood: string;
    categoryTransportation: string;
    categoryShopping: string;
    categoryEntertainment: string;
    categoryBills: string;
    categoryHealthcare: string;
    categoryOther: string;
  };

  // Debts
  debts: {
    title: string;
    subtitle: string;
    createNew: string;
    joinDebt: string;
    createTitle: string;
    createDesc: string;
    joinTitle: string;
    joinDesc: string;
    debtorName: string;
    debtorNamePlaceholder: string;
    amount: string;
    date: string;
    installments: string;
    reason: string;
    reasonPlaceholder: string;
    debtNumber: string;
    debtNumberPlaceholder: string;
    createDebt: string;
    joinDebtButton: string;
    lentTo: string;
    borrowedFrom: string;
    paid: string;
    unpaid: string;
    paidAmount: string;
    remaining: string;
    paymentHistory: string;
    paymentsMade: string;
    makePayment: string;
    makePaymentTitle: string;
    makePaymentDesc: string;
    paymentAmount: string;
    submitPayment: string;
    totalAmount: string;
    debtCreated: string;
    debtNotFound: string;
    debtJoined: string;
    debtClaimed: string;
    paymentSubmitted: string;
    paymentAccepted: string;
    paymentRejected: string;
    debtNumberCopied: string;
    noCreditorDebts: string;
    noDebtorDebts: string;
    moneyLent: string;
    moneyBorrowed: string;
    accepted: string;
    rejected: string;
    pending: string;
    rejectionReason: string;
  };

  // Trip
  trip: {
    title: string;
    subtitle: string;
    createNew: string;
    createTitle: string;
    createDesc: string;
    tripName: string;
    tripNamePlaceholder: string;
    date: string;
    createTrip: string;
    noTrips: string;
    tripCreated: string;
    tripDeleted: string;
    totalExpenses: string;
    perPerson: string;
    participants: string;
    addParticipant: string;
    addParticipantTitle: string;
    addParticipantDesc: string;
    participantName: string;
    participantNamePlaceholder: string;
    noParticipants: string;
    participantAdded: string;
    participantRemoved: string;
    editParticipant: string;
    editParticipantTitle: string;
    editParticipantDesc: string;
    participantUpdated: string;
    name: string;
    totalPaid: string;
    paidAmount: string;
    shouldReceive: string;
    shouldPay: string;
  };

  // Charts
  charts: {
    title: string;
    incomeVsExpenses: string;
    debtsOverTime: string;
    expensesByCategory: string;
    income: string;
    expenses: string;
    month: string;
    amount: string;
    noDataAvailable: string;
  };

  // People
  people: {
    title: string;
    subtitle: string;
    peopleList: string;
    owesYou: string;
    youOwe: string;
    noTransactions: string;
    viewTransactions: string;
    personDetails: string;
    transactionHistory: string;
    totalOwed: string;
    totalOwing: string;
    transactionType: string;
    debt: string;
    income: string;
    expense: string;
    noHistory: string;
  };

  // Not Found
  notFound: {
    title: string;
    subtitle: string;
    goHome: string;
  };
}

export const translations: Record<'en' | 'ar', Translation> = {
  en: {
    common: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      add: 'Add',
      close: 'Close',
      search: 'Search',
      loading: 'Loading...',
      welcome: 'Welcome',
      yes: 'Yes',
      no: 'No',
      confirm: 'Confirm',
      viewDetails: 'View Details',
      back: 'Back',
    },
    nav: {
      dashboard: 'Dashboard',
      myAccount: 'My Account',
      myMoney: 'My Money',
      debts: 'Debts',
      trip: 'Trip',
      people: 'People',
      logout: 'Logout',
      welcomeUser: 'Welcome',
    },
    auth: {
      login: 'Login',
      signup: 'Sign Up',
      welcomeBack: 'Welcome Back',
      loginSubtitle: 'Login to manage your finances',
      createAccount: 'Create Account',
      signupSubtitle: 'Sign up to start managing your finances',
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      userRole: 'User Role',
      creditor: 'Creditor',
      debtor: 'Debtor',
      both: 'Both',
      expenseTracker: 'Expense Tracker',
      creditorDesc: 'Creditor (I lend money)',
      debtorDesc: 'Debtor (I borrow money)',
      bothDesc: 'Both (Creditor & Debtor)',
      expenseTrackerDesc: 'Expense Tracker Only',
      noAccount: "Don't have an account?",
      hasAccount: 'Already have an account?',
      loginSuccess: 'Login successful!',
      signupSuccess: 'Account created successfully!',
      invalidCredentials: 'Invalid phone number or password',
      passwordMismatch: 'Passwords do not match',
      phoneExists: 'Phone number already exists',
    },
    dashboard: {
      title: 'Welcome back',
      subtitle: "Here's an overview of your finances",
      totalMoney: 'Total Money',
      totalSpent: 'Total Spent',
      activeDebts: 'Active Debts',
      trips: 'Trips',
      availableBalance: 'Available balance',
      thisMonth: 'This month',
      totalTransactions: 'Total transactions',
      plannedTrips: 'Planned trips',
      myAccountCard: 'My Account',
      myAccountDesc: 'Manage your personal information',
      myMoneyCard: 'My Money',
      myMoneyDesc: 'Track your income and expenses',
      debtsCard: 'Debts',
      debtsDesc: 'Manage debts and loans',
      tripCard: 'Trip Expenses',
      tripDesc: 'Split trip costs with friends',
      goTo: 'Go to',
    },
    myAccount: {
      title: 'My Account',
      subtitle: 'Manage your personal information and profile details',
      profileSummary: 'Profile Summary',
      editProfile: 'Edit Profile Information',
      editProfileDesc: 'Update your account details and personal information',
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      idNumber: 'ID Number',
      address: 'Address',
      addressOptional: 'Address (Optional)',
      idPhoto: 'ID Photo',
      idPhotoOptional: 'ID Photo URL (Optional)',
      idPhotoHelp: 'Provide a URL to your ID photo or document',
      userId: 'User ID',
      saveChanges: 'Save Changes',
      profileUpdated: 'Profile updated successfully!',
      deleteAccount: 'Delete Account',
      deleteAccountTitle: 'Delete Account',
      deleteAccountDesc: 'Are you sure you want to delete your account? This action cannot be undone.',
      deleteAccountConfirm: 'Yes, delete my account',
      accountDeleted: 'Account deleted successfully!',
      resetPassword: 'Reset Password',
      resetPasswordTitle: 'Reset Password',
      resetPasswordDesc: 'Enter your current password and a new password to reset your account password.',
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      confirmNewPassword: 'Confirm New Password',
      passwordUpdated: 'Password updated successfully!',
      incorrectPassword: 'Incorrect current password',
    },
    myMoney: {
      title: 'My Money',
      subtitle: 'Track your income, expenses, and budget',
      totalMoney: 'Total Money',
      spentThisMonth: 'Spent This Month',
      remaining: 'Remaining',
      availableBalance: 'Available balance',
      expenses: 'Expenses',
      expensesDesc: 'Track your spending this month',
      monthlyBudget: 'Monthly Budget',
      budgetDesc: 'Planned expenses and bills',
      addExpense: 'Add Expense',
      addExpenseTitle: 'Add New Expense',
      addExpenseDesc: 'Record a new expense transaction',
      addBudgetItem: 'Add Item',
      addBudgetTitle: 'Add Budget Item',
      addBudgetDesc: 'Add a planned expense or bill',
      amount: 'Amount',
      category: 'Category',
      date: 'Date',
      note: 'Note',
      noteOptional: 'Optional note',
      itemName: 'Item Name',
      itemNamePlaceholder: 'e.g., Rent, Electricity',
      dueDate: 'Due Date',
      noExpenses: 'No expenses recorded yet',
      noBudgetItems: 'No budget items yet',
      expenseAdded: 'Expense added!',
      expenseDeleted: 'Expense deleted!',
      budgetItemAdded: 'Budget item added!',
      budgetItemDeleted: 'Budget item deleted!',
      update: 'Update',
      totalMoneyUpdated: 'Total money updated!',
      addToBudget: 'Add to Budget',
      categoryFood: 'Food',
      categoryTransportation: 'Transportation',
      categoryShopping: 'Shopping',
      categoryEntertainment: 'Entertainment',
      categoryBills: 'Bills',
      categoryHealthcare: 'Healthcare',
      categoryOther: 'Other',
    },
    debts: {
      title: 'Debts Management',
      subtitle: 'Track money you\'ve lent or borrowed',
      createNew: 'Create New Debt',
      joinDebt: 'Join Debt (Debtor)',
      createTitle: 'Create New Debt',
      createDesc: 'Add a new debt as a creditor',
      joinTitle: 'Join Existing Debt',
      joinDesc: 'Enter the debt number provided by the creditor',
      debtorName: 'Debtor Name',
      debtorNamePlaceholder: 'Name of the person borrowing',
      amount: 'Amount',
      date: 'Date',
      installments: 'Number of Installments',
      reason: 'Reason for Debt',
      reasonPlaceholder: 'Purpose of the loan',
      debtNumber: 'Debt Number',
      debtNumberPlaceholder: 'DEBT-XXXXXXXXX',
      createDebt: 'Create Debt',
      joinDebtButton: 'Join Debt',
      lentTo: 'Lent to',
      borrowedFrom: 'Borrowed from',
      paid: 'Paid',
      unpaid: 'Unpaid',
      paidAmount: 'Paid',
      remaining: 'Remaining',
      paymentHistory: 'Payment History',
      paymentsMade: 'Payments Made',
      makePayment: 'Make Payment',
      makePaymentTitle: 'Make Payment',
      makePaymentDesc: 'Submit a payment for this debt',
      paymentAmount: 'Payment Amount',
      submitPayment: 'Submit Payment',
      totalAmount: 'Total Amount',
      debtCreated: 'Debt created! Debt Number',
      debtNotFound: 'Debt not found!',
      debtJoined: 'Successfully joined debt!',
      debtClaimed: 'This debt is already claimed!',
      paymentSubmitted: 'Payment submitted for review!',
      paymentAccepted: 'Payment accepted!',
      paymentRejected: 'Payment rejected!',
      debtNumberCopied: 'Debt number copied to clipboard!',
      noCreditorDebts: 'No debts where you are the creditor',
      noDebtorDebts: 'No debts where you are the debtor',
      moneyLent: 'Money I Lent',
      moneyBorrowed: 'Money I Borrowed',
      accepted: 'accepted',
      rejected: 'rejected',
      pending: 'pending',
      rejectionReason: 'Reason',
    },
    trip: {
      title: 'Trip Expenses',
      subtitle: 'Split costs and track expenses for group trips',
      createNew: 'Create New Trip',
      createTitle: 'Create New Trip',
      createDesc: 'Add a new trip to track expenses',
      tripName: 'Trip Name',
      tripNamePlaceholder: 'e.g., Beach Weekend',
      date: 'Date',
      createTrip: 'Create Trip',
      noTrips: 'No trips created yet',
      tripCreated: 'Trip created!',
      tripDeleted: 'Trip deleted!',
      totalExpenses: 'Total Expenses',
      perPerson: 'Per Person',
      participants: 'Participants',
      addParticipant: 'Add Participant',
      addParticipantTitle: 'Add Participant',
      addParticipantDesc: 'Add a new person to the trip',
      participantName: 'Participant Name',
      participantNamePlaceholder: 'Enter name',
      noParticipants: 'No participants yet',
      participantAdded: 'Participant added!',
      participantRemoved: 'Participant removed!',
      editParticipant: 'Edit Participant',
      editParticipantTitle: 'Edit Participant',
      editParticipantDesc: 'Update participant details and expenses',
      participantUpdated: 'Participant updated!',
      name: 'Name',
      totalPaid: 'Total Paid',
      paidAmount: 'Paid',
      shouldReceive: 'Should receive',
      shouldPay: 'Should pay',
    },
    charts: {
      title: 'Charts',
      incomeVsExpenses: 'Income vs Expenses',
      debtsOverTime: 'Debts Over Time',
      expensesByCategory: 'Expenses by Category',
      income: 'Income',
      expenses: 'Expenses',
      month: 'Month',
      amount: 'Amount',
      noDataAvailable: 'No data available',
    },
    people: {
      title: 'People',
      subtitle: 'Manage your contacts and transactions',
      peopleList: 'People List',
      owesYou: 'Owes You',
      youOwe: 'You Owe',
      noTransactions: 'No transactions yet',
      viewTransactions: 'View Transactions',
      personDetails: 'Person Details',
      transactionHistory: 'Transaction History',
      totalOwed: 'Total Owed',
      totalOwing: 'Total Owing',
      transactionType: 'Transaction Type',
      debt: 'Debt',
      income: 'Income',
      expense: 'Expense',
      noHistory: 'No history available',
    },
    notFound: {
      title: '404',
      subtitle: 'Page not found',
      goHome: 'Go to Dashboard',
    },
  },
  ar: {
    common: {
      save: 'حفظ',
      cancel: 'إلغاء',
      delete: 'حذف',
      edit: 'تعديل',
      add: 'إضافة',
      close: 'إغلاق',
      search: 'بحث',
      loading: 'جاري التحميل...',
      welcome: 'مرحباً',
      yes: 'نعم',
      no: 'لا',
      confirm: 'تأكيد',
      viewDetails: 'عرض التفاصيل',
      back: 'رجوع',
    },
    nav: {
      dashboard: 'لوحة التحكم',
      myAccount: 'حسابي',
      myMoney: 'أموالي',
      debts: 'الديون',
      trip: 'الرحلات',
      people: 'الأشخاص',
      logout: 'تسجيل الخروج',
      welcomeUser: 'مرحباً',
    },
    auth: {
      login: 'تسجيل الدخول',
      signup: 'إنشاء حساب',
      welcomeBack: 'مرحباً بعودتك',
      loginSubtitle: 'قم بتسجيل الدخول لإدارة أموالك',
      createAccount: 'إنشاء حساب جديد',
      signupSubtitle: 'سجل لبدء إدارة أموالك',
      fullName: 'الاسم الكامل',
      phoneNumber: 'رقم الهاتف',
      password: 'كلمة المرور',
      confirmPassword: 'تأكيد كلمة المرور',
      userRole: 'دور المستخدم',
      creditor: 'دائن',
      debtor: 'مدين',
      both: 'كلاهما',
      expenseTracker: 'متتبع المصروفات',
      creditorDesc: 'دائن (أقرض المال)',
      debtorDesc: 'مدين (أقترض المال)',
      bothDesc: 'كلاهما (دائن ومدين)',
      expenseTrackerDesc: 'متتبع المصروفات فقط',
      noAccount: 'ليس لديك حساب؟',
      hasAccount: 'لديك حساب بالفعل؟',
      loginSuccess: 'تم تسجيل الدخول بنجاح!',
      signupSuccess: 'تم إنشاء الحساب بنجاح!',
      invalidCredentials: 'رقم الهاتف أو كلمة المرور غير صحيحة',
      passwordMismatch: 'كلمات المرور غير متطابقة',
      phoneExists: 'رقم الهاتف موجود بالفعل',
    },
    dashboard: {
      title: 'مرحباً بعودتك',
      subtitle: 'إليك نظرة عامة على أموالك',
      totalMoney: 'إجمالي المال',
      totalSpent: 'إجمالي المصروفات',
      activeDebts: 'الديون النشطة',
      trips: 'الرحلات',
      availableBalance: 'الرصيد المتاح',
      thisMonth: 'هذا الشهر',
      totalTransactions: 'إجمالي المعاملات',
      plannedTrips: 'الرحلات المخططة',
      myAccountCard: 'حسابي',
      myAccountDesc: 'إدارة معلوماتك الشخصية',
      myMoneyCard: 'أموالي',
      myMoneyDesc: 'تتبع دخلك ومصروفاتك',
      debtsCard: 'الديون',
      debtsDesc: 'إدارة الديون والقروض',
      tripCard: 'مصاريف الرحلات',
      tripDesc: 'قسم تكاليف الرحلة مع الأصدقاء',
      goTo: 'الذهاب إلى',
    },
    myAccount: {
      title: 'حسابي',
      subtitle: 'إدارة معلوماتك الشخصية وتفاصيل الملف الشخصي',
      profileSummary: 'ملخص الملف الشخصي',
      editProfile: 'تعديل معلومات الملف الشخصي',
      editProfileDesc: 'تحديث تفاصيل حسابك ومعلوماتك الشخصية',
      fullName: 'الاسم الكامل',
      phoneNumber: 'رقم الهاتف',
      idNumber: 'رقم الهوية',
      address: 'العنوان',
      addressOptional: 'العنوان (اختياري)',
      idPhoto: 'صورة الهوية',
      idPhotoOptional: 'رابط صورة الهوية (اختياري)',
      idPhotoHelp: 'قدم رابطاً لصورة الهوية أو المستند',
      userId: 'معرف المستخدم',
      saveChanges: 'حفظ التغييرات',
      profileUpdated: 'تم تحديث الملف الشخصي بنجاح!',
      deleteAccount: 'حذف الحساب',
      deleteAccountTitle: 'حذف الحساب',
      deleteAccountDesc: 'هل أنت متأكد من حذف حسابك؟ لا يمكن التراجع عن هذا الإجراء.',
      deleteAccountConfirm: 'نعم، حذف حسابي',
      accountDeleted: 'تم حذف الحساب بنجاح!',
      resetPassword: 'إعادة تعيين كلمة المرور',
      resetPasswordTitle: 'إعادة تعيين كلمة المرور',
      resetPasswordDesc: 'أدخل كلمة المرور الحالية و كلمة مرور جديدة لإعادة تعيين كلمة مرور حسابك.',
      currentPassword: 'كلمة المرور الحالية',
      newPassword: 'كلمة المرور الجديدة',
      confirmNewPassword: 'تأكيد كلمة المرور الجديدة',
      passwordUpdated: 'تم تحديث كلمة المرور بنجاح!',
      incorrectPassword: 'كلمة المرور الحالية غير صحيحة',
    },
    myMoney: {
      title: 'أموالي',
      subtitle: 'تتبع دخلك ومصروفاتك وميزانيتك',
      totalMoney: 'إجمالي المال',
      spentThisMonth: 'المصروف هذا الشهر',
      remaining: 'المتبقي',
      availableBalance: 'الرصيد المتاح',
      expenses: 'المصروفات',
      expensesDesc: 'تتبع إنفاقك هذا الشهر',
      monthlyBudget: 'الميزانية الشهرية',
      budgetDesc: 'المصروفات والفواتير المخططة',
      addExpense: 'إضافة مصروف',
      addExpenseTitle: 'إضافة مصروف جديد',
      addExpenseDesc: 'تسجيل معاملة مصروف جديدة',
      addBudgetItem: 'إضافة عنصر',
      addBudgetTitle: 'إضافة عنصر للميزانية',
      addBudgetDesc: 'إضافة مصروف أو فاتورة مخططة',
      amount: 'المبلغ',
      category: 'الفئة',
      date: 'التاريخ',
      note: 'ملاحظة',
      noteOptional: 'ملاحظة اختيارية',
      itemName: 'اسم العنصر',
      itemNamePlaceholder: 'مثال: الإيجار، الكهرباء',
      dueDate: 'تاريخ الاستحقاق',
      noExpenses: 'لم يتم تسجيل أي مصروفات بعد',
      noBudgetItems: 'لا توجد عناصر ميزانية بعد',
      expenseAdded: 'تم إضافة المصروف!',
      expenseDeleted: 'تم حذف المصروف!',
      budgetItemAdded: 'تم إضافة عنصر الميزانية!',
      budgetItemDeleted: 'تم حذف عنصر الميزانية!',
      update: 'تحديث',
      totalMoneyUpdated: 'تم تحديث إجمالي المال!',
      addToBudget: 'إضافة إلى الميزانية',
      categoryFood: 'طعام',
      categoryTransportation: 'مواصلات',
      categoryShopping: 'تسوق',
      categoryEntertainment: 'ترفيه',
      categoryBills: 'فواتير',
      categoryHealthcare: 'رعاية صحية',
      categoryOther: 'أخرى',
    },
    debts: {
      title: 'إدارة الديون',
      subtitle: 'تتبع الأموال التي أقرضتها أو اقترضتها',
      createNew: 'إنشاء دين جديد',
      joinDebt: 'الانضمام إلى دين (مدين)',
      createTitle: 'إنشاء دين جديد',
      createDesc: 'إضافة دين جديد كدائن',
      joinTitle: 'الانضمام إلى دين موجود',
      joinDesc: 'أدخل رقم الدين المقدم من الدائن',
      debtorName: 'اسم المدين',
      debtorNamePlaceholder: 'اسم الشخص المقترض',
      amount: 'المبلغ',
      date: 'التاريخ',
      installments: 'عدد الأقساط',
      reason: 'سبب الدين',
      reasonPlaceholder: 'الغرض من القرض',
      debtNumber: 'رقم الدين',
      debtNumberPlaceholder: 'DEBT-XXXXXXXXX',
      createDebt: 'إنشاء دين',
      joinDebtButton: 'الانضمام إلى الدين',
      lentTo: 'أقرضت لـ',
      borrowedFrom: 'اقترضت من',
      paid: 'مدفوع',
      unpaid: 'غير مدفوع',
      paidAmount: 'مدفوع',
      remaining: 'متبقي',
      paymentHistory: 'سجل الدفعات',
      paymentsMade: 'الدفعات المسددة',
      makePayment: 'إجراء دفع',
      makePaymentTitle: 'إجراء دفع',
      makePaymentDesc: 'إرسال دفعة لهذا الدين',
      paymentAmount: 'مبلغ الدفع',
      submitPayment: 'إرسال الدفع',
      totalAmount: 'المبلغ الإجمالي',
      debtCreated: 'تم إنشاء الدين! رقم الدين',
      debtNotFound: 'لم يتم العثور على الدين!',
      debtJoined: 'تم الانضمام إلى الدين بنجاح!',
      debtClaimed: 'هذا الدين تم المطالبة به بالفعل!',
      paymentSubmitted: 'تم إرسال الدفعة للمراجعة!',
      paymentAccepted: 'تم قبول الدفعة!',
      paymentRejected: 'تم رفض الدفعة!',
      debtNumberCopied: 'تم نسخ رقم الدين إلى الحافظة!',
      noCreditorDebts: 'لا توجد ديون أنت الدائن فيها',
      noDebtorDebts: 'لا توجد ديون أنت المدين فيها',
      moneyLent: 'الأموال التي أقرضتها',
      moneyBorrowed: 'الأموال التي اقترضتها',
      accepted: 'مقبول',
      rejected: 'مرفوض',
      pending: 'قيد الانتظار',
      rejectionReason: 'السبب',
    },
    trip: {
      title: 'مصاريف الرحلات',
      subtitle: 'قسم التكاليف وتتبع مصاريف الرحلات الجماعية',
      createNew: 'إنشاء رحلة جديدة',
      createTitle: 'إنشاء رحلة جديدة',
      createDesc: 'إضافة رحلة جديدة لتتبع المصاريف',
      tripName: 'اسم الرحلة',
      tripNamePlaceholder: 'مثال: عطلة الشاطئ',
      date: 'التاريخ',
      createTrip: 'إنشاء رحلة',
      noTrips: 'لم يتم إنشاء رحلات بعد',
      tripCreated: 'تم إنشاء الرحلة!',
      tripDeleted: 'تم حذف الرحلة!',
      totalExpenses: 'إجمالي المصاريف',
      perPerson: 'للشخص الواحد',
      participants: 'المشاركون',
      addParticipant: 'إضافة مشارك',
      addParticipantTitle: 'إضافة مشارك',
      addParticipantDesc: 'إضافة شخص جديد إلى الرحلة',
      participantName: 'اسم المشارك',
      participantNamePlaceholder: 'أدخل الاسم',
      noParticipants: 'لا يوجد مشاركون بعد',
      participantAdded: 'تم إضافة المشارك!',
      participantRemoved: 'تم إزالة المشارك!',
      editParticipant: 'تعديل المشارك',
      editParticipantTitle: 'تعديل المشارك',
      editParticipantDesc: 'تحديث تفاصيل المشارك والمصاريف',
      participantUpdated: 'تم تحديث المشارك!',
      name: 'الاسم',
      totalPaid: 'إجمالي المدفوع',
      paidAmount: 'المدفوع',
      shouldReceive: 'يجب أن يستلم',
      shouldPay: 'يجب أن يدفع',
    },
    charts: {
      title: 'الرسوم البيانية',
      incomeVsExpenses: 'الدخل مقابل المصروفات',
      debtsOverTime: 'الديون على مر الزمن',
      expensesByCategory: 'المصروفات حسب الفئة',
      income: 'الدخل',
      expenses: 'المصروفات',
      month: 'الشهر',
      amount: 'المبلغ',
      noDataAvailable: 'لا توجد بيانات متاحة',
    },
    people: {
      title: 'الأشخاص',
      subtitle: 'إدارة معلوماتك الشخصية وتفاصيل الملف الشخصي',
      peopleList: 'قائمة الأشخاص',
      owesYou: 'يجب أن يدفعونك',
      youOwe: 'يجب أن تدفعك',
      noTransactions: 'لا توجد معاملات بعد',
      viewTransactions: 'عرض المعاملات',
      personDetails: 'تفاصيل الشخص',
      transactionHistory: 'سجل المعاملات',
      totalOwed: 'إجمالي ما يجب أن يدفعه الآخرون',
      totalOwing: 'إجمالي ما يجب أن أدفعه',
      transactionType: 'نوع المعاملة',
      debt: 'دين',
      income: 'دخل',
      expense: 'مصروف',
      noHistory: 'لا يوجد تاريخ معاملات',
    },
    notFound: {
      title: '404',
      subtitle: 'الصفحة غير موجودة',
      goHome: 'الذهاب إلى لوحة التحكم',
    },
  },
};