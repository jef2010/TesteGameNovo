export function InputTipsContent() {
  return (
    <div className='flex gap-3 bg-black/90 px-4 py-2 font-["Noto_Mono",ui-monospace,monospace] text-sm text-white shadow shadow-black'>
      <div className='flex items-center justify-center gap-2'>
        <kbd className='icon-[mdi--gamepad] h-4 w-4' />
        Move
      </div>

      <div className='flex items-center justify-center gap-2'>
        <kbd className='icon-[mdi--gamepad-circle-right] h-4 w-4' />
        Confirm
      </div>

      <div className='flex items-center justify-center gap-2'>
        <kbd className='icon-[mdi--gamepad-circle-down] h-4 w-4' />
        Cancle
      </div>
    </div>
  )
}
