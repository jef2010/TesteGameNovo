import { useState } from 'react'
import { BaseDialogTrigger } from '../../primitives/base-dialog-trigger'
import { ConfigKeyboardDialogContent } from './config-keyboard-dialog-content'
import { TopBarButton } from './top-bar-button'

export function ConfigKeyboardButton() {
  const [open, setOpen] = useState(false)

  function onOpenChange(open) {
    setOpen(open)
  }

  return (
    <BaseDialogTrigger content={<ConfigKeyboardDialogContent />} onOpenChange={onOpenChange} open={open}>
      <TopBarButton>
        <div className='flex items-center gap-2 px-4'>
          <span className='icon-[mdi--keyboard] relative z-[1] h-8 w-8' />
          Configure Keyboards
        </div>
      </TopBarButton>
    </BaseDialogTrigger>
  )
}
