import { ArrowTopRightOnSquareIcon, PhoneArrowUpRightIcon, PhoneXMarkIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline"

const MonitoringMenu = () => {
  return (
    <div className="app-container flex-col">
      <div className="p-2 gap-2">
        <div className="menu-title">監 視</div>
        <div className="rounded-md ">
          <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">情報一覧</div>
          <div className="bg-[#2E2E2E] rounded-b-md ">
            <div className="py-2 px-4 border-b-black border-b">
              <textarea rows={5} className="w-full rounded-md" />
            </div>
            <div className="py-2 px-4 border-b-black border-b flex gap-2 justify-between w-full items-center">
              <div className="w-full items-center h-full flex">
                <select className="px-4 py-1 w-full rounded-md" >
                  <option>全車両一括停止</option>
                  <option>サンプルアイテム</option>
                </select>
              </div>
              <div className="w-36">
                <button className="bg-[#FF004E] hover:opacity-75 text-white rounded-full px-4 py-1 text-nowrap">実 行</button>
              </div>
            </div>
            <div className="py-2 px-4 flex flex-col gap-4 justify-between w-full items-center">
              <div className="flex w-full gap-2">
                <div className="w-full items-center h-full flex">
                  <select className="px-4 py-1 w-full rounded-md" >
                    <option>監視対象グループ名称</option>
                    <option>サンプルアイテム</option>
                  </select>
                </div>
                <div className="w-36" />
              </div>
              <div className="flex w-full gap-2">
                <div className="w-full items-center h-full flex">
                  <select className="px-4 py-1 w-full rounded-md" >
                    <option>監視対象グループ名称</option>
                    <option>サンプルアイテム</option>
                  </select>
                </div>
                <div className="w-36" >
                  <button className="bg-[#01CBA4] hover:opacity-75 text-white rounded-full px-4 py-1 text-nowrap">移 動</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Menu Multi Item start */}

      <div className="app-container gap-2 flex-col scroll pr-1 p-1 bg-[#5e5e5e]">

        {/* Menu Itmes start */}

        <div className="rounded-md bg-black ">
          <div className="rounded-t-md text-white py-2 px-2 text-left flex justify-between items-center">
            <span className="w-full">ID xxxxxx</span>
            <select className="px-2 py-1 w-72 text-black rounded-md" >
              <option>車両状態</option>
              <option>サンプルアイテム</option>
            </select>
          </div>

          <div className="bg-[#434953] border-x-4 border-b-4 border-black rounded-b-md ">
            <div className="py-2 px-4 border-b-black border-b flex items-center">
              <div className="flex flex-col gap-2 w-full">
                <div className="px-3 py-1 rounded-md bg-white text-left ">自動運転モード</div>
                <div className="px-3 py-1 rounded-md bg-white text-left ">車両状態</div>
                <div className="flex items-center">
                  <div className="px-3 py-1 rounded-md bg-white text-left w-full">速度</div>
                  <div className="w-full text-white text-left pl-2">km/h</div>
                </div>
              </div>
              <div className="w-full flex gap-3 justify-center">
                <button className="rounded-full p-3 w-14 h-14 justify-center items-center text-[#01CBA4] hover:bg-[#01CBA4] hover:text-white">
                  <ArrowTopRightOnSquareIcon />
                </button>
                <button className="rounded-full p-3 w-14 h-14 justify-center items-center text-[#01CBA4] hover:bg-[#01CBA4] hover:text-white">
                  <PhoneArrowUpRightIcon />
                </button>
                <button className="rounded-full p-3 w-14 h-14 justify-center items-center text-[#01CBA4] hover:bg-[#01CBA4] hover:text-white">
                  <SpeakerWaveIcon />
                </button>
              </div>
            </div>
            <div className="py-2 px-4 flex gap-2 justify-center w-full items-center">
              <button className="bg-[#FF004E] hover:opacity-75 text-white rounded-full px-4 py-1 text-nowrap">緊急停止</button>
            </div>
          </div>
        </div>

        {/* Menu Itmes end */}

        <div className="rounded-md bg-[#FF004E] ">
          <div className="rounded-t-md text-white py-2 px-2 text-left flex justify-between items-center">
            <span className="w-full">ID xxxxxx</span>
            <select className="px-2 py-1 w-72 text-black rounded-md" >
              <option>車両状態</option>
              <option>サンプルアイテム</option>
            </select>
          </div>

          <div className="bg-[#434953] border-x-4 border-b-4 border-[#FF004E] rounded-b-md ">
            <div className="py-2 px-4 border-b-black border-b flex items-center">
              <div className="flex flex-col gap-2 w-full">
                <div className="px-3 py-1 rounded-md bg-white text-left ">自動運転モード</div>
                <div className="px-3 py-1 rounded-md bg-white text-left ">車両状態</div>
                <div className="flex items-center">
                  <div className="px-3 py-1 rounded-md bg-white text-left w-full">速度</div>
                  <div className="w-full text-white text-left pl-2">km/h</div>
                </div>
              </div>
              <div className="w-full flex gap-3 justify-center">
                <button className="rounded-full p-3 w-14 h-14 justify-center items-center hover:text-[#01CBA4] bg-[#01CBA4] hover:bg-white text-white">
                  <ArrowTopRightOnSquareIcon />
                </button>
                <button className="rounded-full p-3 w-14 h-14 justify-center items-center hover:text-[#01CBA4] bg-[#01CBA4] hover:bg-white text-white">
                  <PhoneXMarkIcon />
                </button>
                <button className="rounded-full p-3 w-14 h-14 justify-center items-center hover:text-[#01CBA4] bg-[#01CBA4] hover:bg-white text-white">
                  <SpeakerXMarkIcon />
                </button>
              </div>
            </div>
            <div className="py-2 px-4 flex gap-2 justify-center w-full items-center">
              <button className="bg-[#FF004E] hover:opacity-75 text-white rounded-full px-4 py-1 text-nowrap">緊急停止</button>
            </div>
          </div>
        </div>

        <div className="rounded-md bg-black ">
          <div className="rounded-t-md text-white py-2 px-2 text-left flex justify-between items-center">
            <span className="w-full">ID xxxxxx</span>
            <select className="px-2 py-1 w-72 text-black rounded-md" >
              <option>詳細情報</option>
              <option>サンプルアイテム</option>
            </select>
          </div>

          <div className="bg-[#434953] border-x-4 border-b-4 border-black rounded-b-md ">
            <div className="py-2 px-4 border-b-black border-b flex items-center gap-3">
              <div className="flex flex-col gap-2 w-full">
                <div className="px-3 py-1 rounded-md bg-white text-left ">自動運転モード</div>
                <div className="px-3 py-1 rounded-md bg-white text-left ">車両状態</div>
                <div className="flex items-center">
                  <div className="px-3 py-1 rounded-md bg-white text-left w-full">速度</div>
                  <div className="w-full text-white text-left pl-2">km/h</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="px-3 py-1 rounded-md bg-white text-left ">エンジン</div>
                <div className="px-3 py-1 rounded-md bg-white text-left ">自己位置</div>
                <div className="flex items-center">
                  <div className="px-3 py-1 rounded-md bg-white text-left w-full">バッテリー</div>
                  <div className="w-full text-white text-left pl-2">%</div>
                </div>
              </div>
            </div>
            <div className="py-2 px-4 flex gap-2 justify-center w-full items-center">
              <button className="bg-[#FF004E] hover:opacity-75 text-white rounded-full px-4 py-1 text-nowrap">緊急停止</button>
            </div>
          </div>
        </div>


        <div className="rounded-md bg-black ">
          <div className="rounded-t-md text-white py-2 px-2 text-left flex justify-between items-center">
            <span className="w-full">ID xxxxxx</span>
            <select className="px-2 py-1 w-72 text-black rounded-md" >
              <option>詳細情報</option>
              <option>サンプルアイテム</option>
            </select>
          </div>

          <div className="bg-[#434953] border-x-4 border-b-4 border-black rounded-b-md ">
            <div className="py-2 px-4 border-b-black border-b flex items-center gap-3">
              <div className="px-3 py-1 rounded-md w-full bg-white text-left whitespace-pre-line ">
                異常情報一覧<br />
                車内異常行動検出
              </div>
            </div>
            <div className="py-2 px-4 flex gap-2 justify-center w-full items-center">
              <button className="bg-[#FF004E] hover:opacity-75 text-white rounded-full px-4 py-1 text-nowrap">緊急停止</button>
            </div>
          </div>
        </div>

      </div>

      {/* Menu Multi Item end */}

    </div>
  )
}

export default MonitoringMenu