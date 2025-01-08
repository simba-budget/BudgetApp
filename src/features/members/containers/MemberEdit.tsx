import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { MemberForm } from '../components';
import { useEditMember, useMember, useMemberForm } from '../hooks';
import { mapSaveMemberRequest } from '../map';
import { SaveMemberRequest } from '../types';

export interface MemberEditProps {
  id: number;
}

const MemberEdit = ({ id }: MemberEditProps) => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<RootNavigation>();
  const { member, isLoading } = useMember(id);
  const { handleSubmit, control, reset } = useMemberForm();
  const { editMember, isSubmitting } = useEditMember({ onSuccess: goBack });

  const handleOnSubmit = (request: SaveMemberRequest) => {
    if (!member) return;
    return editMember({ id, ...request, accountId });
  };

  useEffect(() => {
    if (member) reset(mapSaveMemberRequest(member));
  }, [member, reset]);

  return (
    <MemberForm
      onSubmit={handleSubmit(handleOnSubmit)}
      isSubmitting={isSubmitting}
      control={control}
      isDisabled={isLoading || !member}
    />
  );
};

export default MemberEdit;
