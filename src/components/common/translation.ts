import { defineMessages } from 'react-intl'

const commonMessages = {
  '*': defineMessages({
    successfullyUpdate: { id: 'common.*.successfullyUpdate', defaultMessage: '更新成功' },
    save: { id: 'common.*.save', defaultMessage: '儲存' },
    isRequiredWarning: { id: 'common.*.isRequiredWarning', defaultMessage: '請填入{name}' },
    nextStep: {
      id: 'common.*.nextStep',
      defaultMessage: '下一步',
    },
    fetchError: {
      id: 'common.*.fetchError',
      defaultMessage: '讀取失敗',
    },
  }),
  GlobalSearchInput: defineMessages({
    atLeastTwoChar: {
      id: 'common.GlobalSearchInput.atLeastTwoChar',
      defaultMessage: 'Please enter at least two characters',
    },
  }),
  AudioPlayer: defineMessages({
    playRate: { id: 'common.AudioPlayer.playRate', defaultMessage: 'Play rate' },
    listLoop: { id: 'common.AudioPlayer.listLoop', defaultMessage: 'List loop' },
    singleLoop: { id: 'common.AudioPlayer.singleLoop', defaultMessage: 'Single loop' },
    random: { id: 'common.AudioPlayer.random', defaultMessage: 'Random' },
  }),
  SignupPropertyModal: defineMessages({
    signupInfo: {
      id: 'common.SignupPropertyModal.signupInfo',
      defaultMessage: '註冊資訊',
    },
  }),
  SignupPropertySection: defineMessages({
    name: {
      id: 'common.SignupPropertySection.name',
      defaultMessage: '姓名',
    },
    enterName: {
      id: 'common.SignupPropertySection.enterName',
      defaultMessage: '請填入姓名',
    },
    nameFieldWarning: {
      id: 'common.SignupPropertySection.nameFieldWarning',
      defaultMessage: 'please enter your name.',
    },
  }),
  InAppBrowserWarningModal: defineMessages({
    notSupportInAppBrowserTitle: {
      id: 'common.InAppBrowserWarningModal.notSupportInAppBrowserTitle',
      defaultMessage: 'Not support in app Browser',
    },
    notSupportInAppBrowserDescription: {
      id: 'common.InAppBrowserWarningModal.notSupportInAppBrowserDescription',
      defaultMessage: 'Please use another browser to browse this website.',
    },
    openPage: {
      id: 'common.InAppBrowserWarningModal.openPage',
      defaultMessage: 'Open page',
    },
    notSupportInAppBrowserLeadDescription: {
      id: 'common.InAppBrowserWarningModal.notSupportInAppBrowserLeadDescription',
      defaultMessage: 'Click "More Options" (three dots in the lower right corner) and click "Open in browser"',
    },
    warning: {
      id: 'common.InAppBrowserWarningModal.warning',
      defaultMessage:
        'To provide you with the best website experience and to avoid limited website functionality, it is recommended not to use the browser within an app, but rather to open the website through the default browser.',
    },
  }),
  MembershipCardTermsModal: defineMessages({
    ActivityTicket: { id: 'common.membershipCardTerm.activityTicket', defaultMessage: '活動' },
    ProgramPlan: { id: 'common.membershipCardTerm.program', defaultMessage: '課程' },
    ProgramPackagePlan: { id: 'common.membershipCardTerm.programPackage', defaultMessage: '課程組合' },
    PodcastProgram: { id: 'common.membershipCardTerm.podcastProgram', defaultMessage: '廣播' },
    cashDiscount: { id: 'common.membershipCardTerm.cashDiscount', defaultMessage: '折抵金額' },
    percentageDiscount: { id: 'common.membershipCardTerm.percentageDiscount', defaultMessage: '折抵比例' },
    generalDiscount: { id: 'common.membershipCardTerm.generalDiscount', defaultMessage: '折抵' },
    type: { id: 'common.membershipCardTerm.type', defaultMessage: '類型' },
    discountName: { id: 'common.membershipCardTerm.discountName', defaultMessage: '名稱' },
    discountType: { id: 'common.membershipCardTerm.discountType', defaultMessage: '優惠類型' },
    equityType: { id: 'common.membershipCardTerm.equityType', defaultMessage: '權益開通' },
    usageDescription: { id: 'common.membershipCardTerm.usageDescription', defaultMessage: '使用描述' },
    discountTerms: { id: 'common.membershipCardTerm.discountTerms', defaultMessage: '優惠條件' },
  }),
}

export default commonMessages
