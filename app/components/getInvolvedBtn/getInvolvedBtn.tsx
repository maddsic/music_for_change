import { cn } from '~/lib/utils';
import { Button } from '../UI/button/button';
import { useModal } from '~/hooks/useModal';

export function GetInvolvedBtn() {
  const { openModal } = useModal();
  return (
    <div className="pr-4 hidden xl:block">
      <Button
        onClick={() => openModal('contact')}
        className={cn(
          'bg-secondary text-primary-foreground btn-hover rounded-md cursor-pointer',
        )}
      >
        Get Involved
      </Button>
    </div>
  );
}
