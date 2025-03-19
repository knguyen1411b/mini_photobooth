import { IconButton, MenuItem, Select } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

interface SelectOptionProps {
  delay: number
  // eslint-disable-next-line no-unused-vars
  setDelay: (delay: number) => void
  isBg: string
  // eslint-disable-next-line no-unused-vars
  setIsBg: (isBg: string) => void
  isFilter: string
  // eslint-disable-next-line no-unused-vars
  setIsFilter: (isFilter: string) => void
}

export default function SelectOption({
  delay,
  setDelay,
  isBg,
  setIsBg,
  isFilter,
  setIsFilter,
}: SelectOptionProps) {
  return (
    <div className="mt-10 flex flex-col gap-4 p-6 bg-white rounded-xl shadow-lg w-[90%] border border-gray-200 mx-5">
      <div className="flex flex-col gap-3">
        <label className="text-gray-700 font-semibold">
          ⏳ Thời gian chụp:
        </label>
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
          <IconButton
            sx={{ border: '1px solid #ccc' }}
            onClick={() => setDelay(delay <= 1000 ? 1000 : delay - 1000)}
          >
            <RemoveIcon />
          </IconButton>
          <span className="text-gray-800 font-medium text-lg">
            {delay} giây
          </span>
          <IconButton
            sx={{ border: '1px solid #ccc' }}
            onClick={() => setDelay(delay + 1000)}
          >
            <AddIcon />
          </IconButton>
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-1 border rounded-lg shadow-sm bg-gray-50">
        <span className="text-gray-700 font-semibold">🎨 Màu nền:</span>
        <input
          type="color"
          value={isBg}
          onChange={(e) => setIsBg(e.target.value)}
          className="w-12 h-12 cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-semibold">🖼 Bộ lọc:</label>
        <Select
          value={isFilter}
          onChange={(e) => setIsFilter(e.target.value)}
          sx={{
            bgcolor: 'white',
            borderRadius: 3,
            width: '100%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <MenuItem value="none">Không có</MenuItem>
          <MenuItem value="grayscale(100%)">Đen trắng</MenuItem>
          <MenuItem value="sepia(100%)">Sepia</MenuItem>
          <MenuItem value="brightness(1.5)">Tăng độ sáng</MenuItem>
          <MenuItem value="contrast(1.5)">Tăng tương phản</MenuItem>
          <MenuItem value="saturate(2)">Tăng màu sắc</MenuItem>
          <MenuItem value="blur(3px)">Làm mờ</MenuItem>
          <MenuItem value="invert(100%)">Đảo màu</MenuItem>
        </Select>
      </div>
    </div>
  )
}
