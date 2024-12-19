import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { addUser } from '../../services/users';
import { Input } from '../ui/Input';
import { PageContainer } from '../layout/PageContainer';
import { Card } from '../ui/Card';
import { ButtonGroup } from '../ui/ButtonGroup';
import { User, ClipboardList, Clock } from 'lucide-react';
import { getCurrentDateTime } from '../../utils/dateTime';

export const UserAdd: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!name || !serialNumber) {
      setError(t('fill_all_fields'));
      return;
    }

    const result = await addUser({
      name,
      serialNumber,
      dateTime: getCurrentDateTime()
    });

    if (!result.success) {
      setError(t(result.error || 'an_error_occurred'));
      return;
    }

    navigate('/main');
  };

  return (
    <PageContainer title={t('user_add')}>
      <Card error={error}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t('name')}
          icon={User}
          label={t('name')}
          theme="dark"
        />

        <Input
          type="text"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          placeholder={t('serial_number')}
          icon={ClipboardList}
          label={t('serial_number')}
          theme="dark"
        />

        <Input
          type="text"
          value={getCurrentDateTime()}
          onChange={() => {}}
          placeholder={t('date_time')}
          icon={Clock}
          label={t('date_time')}
          theme="dark"
          disabled
        />

        <ButtonGroup
          onConfirm={handleSubmit}
          onCancel={() => navigate('/main')}
          confirmText={t('ok')}
          cancelText={t('cancel')}
        />
      </Card>
    </PageContainer>
  );
};