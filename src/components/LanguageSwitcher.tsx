import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select 
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
      className="bg-gray-700 text-white rounded-lg px-2 py-1"
    >
      <option value="en">EN</option>
      <option value="am">አማ</option>
    </select>
  );
};

export default LanguageSwitcher;