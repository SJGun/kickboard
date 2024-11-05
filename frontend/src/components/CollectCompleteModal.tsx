import { useState } from 'react';
import { CameraIcon } from '@heroicons/react/24/solid';

export interface CollectCompleteModalProps {
  onClose: () => void;
  onSubmit: (completionImages: string, processType: string) => void;
  address?: string | null;
  category?: string | null;
}

const CollectCompleteModal = ({
  onClose,
  onSubmit,
  address,
  category,
}: CollectCompleteModalProps) => {
  const [completionImages, setCompletionImages] = useState<string>('');
  const [processType, setProcessType] = useState<string>('PICK');
  const [showWarning, setShowWarning] = useState(false);

  // 사진 찍기
  const handleImageCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompletionImages(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // x버튼 누르면 현재 찍은 (고른) 이미지 삭제
  const handleRemoveImage = () => {
    setCompletionImages('');
  };

  const handleConfirm = () => {
    if (completionImages && processType !== 'PICK') {
      onSubmit(completionImages, processType);
      onClose();
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-75">
      <div className="relative w-80 rounded-md bg-white p-5 shadow-md">
        {/* <h2 className="mb-4 text-lg font-semibold">완료 처리</h2> */}

        {/* 해당 킥보드 주소와 신고 유형 */}
        {address && category && (
          <div className="mb-4">
            <p className="font-bold">{address}</p>
            <p className="text-red-500">{category}</p>
          </div>
        )}

        {/* 사진 첨부 */}
        {/* <label className="mb-2 block">사진 첨부:</label> */}
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageCapture}
            className="hidden"
            id="cameraInput"
          />
          <button
            onClick={() => document.getElementById('cameraInput')?.click()}
            className="flex items-center rounded bg-blue-500 px-4 py-2 text-white"
          >
            <CameraIcon className="h-5 w-5" />
            <p>&nbsp;사진 찍기</p>
          </button>
        </div>

        {/* 이미지 미리보기와 삭제 버튼 */}
        {completionImages && (
          <div className="relative mt-2">
            <img
              src={completionImages}
              alt="Captured preview"
              className="h-auto w-full rounded"
            />
            <button
              onClick={handleRemoveImage}
              className="absolute right-1 top-1 rounded-full bg-red-600 p-1 text-white"
            >
              ✕
            </button>
          </div>
        )}

        {/* 처리 유형 선택 */}
        {/* <label className="mb-2 mt-4 block">처리 유형:</label> */}
        <div>
          <select
            value={processType}
            onChange={(e) => {
              setProcessType(e.target.value);
              setShowWarning(false);
            }}
            className="mb-4 mt-4 w-full border p-2"
          >
            <option value="PICK">처리 유형을 고르세요</option>
            <option value="NOT_EXIST">킥보드가 신고받은 위치에 없음</option>
            <option value="MOVE">안전한 곳으로 이동시킴</option>
            <option value="TOW">견인</option>
            <option value="PARK">넘어진 걸 세워둠</option>
          </select>
        </div>

        {/* 경고 메시지 */}
        {showWarning && (
          <p className="mb-4 text-red-500">사진과 처리 유형을 선택해주세요.</p>
        )}

        {/* 취소 및 확인 버튼 */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 rounded bg-gray-300 px-4 py-2"
          >
            취소
          </button>
          <button
            onClick={handleConfirm}
            disabled={!completionImages || processType === 'PICK'}
            className={`rounded px-4 py-2 text-white ${
              !completionImages || processType === 'PICK'
                ? 'cursor-not-allowed bg-gray-400'
                : 'bg-blue-500'
            }`}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectCompleteModal;
