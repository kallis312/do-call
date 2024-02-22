
const RecordMenu = () => {
  return (
    <div className="app-container flex-col p-2 gap-2">
      <div className="menu-title">録 画</div>
      <div className="rounded-md bg-[#2E2E2E] p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <input id="check_1" type="checkbox" className="w-[18px] h-[18px] accent-[#01CBA4]" />
          <label htmlFor="check_1" className="text-white" >監視対象グループ</label>
        </div>
        <div>
          <select className="py-1 px-4 w-full rounded-md"  >
            <option>監視グループ名称</option>
            <option>サンプルアイテム</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input id="check_2" type="checkbox" className="w-[18px] h-[18px] accent-[#01CBA4]" />
          <label htmlFor="check_2" className="text-white" >監視対象名称</label>
        </div>
        <div>
          <select className="py-1 px-4 w-full rounded-md"  >
            <option>カメラ名称</option>
            <option>サンプルアイテム</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input id="check_3" type="checkbox" className="w-[18px] h-[18px] accent-[#01CBA4]" />
          <label htmlFor="check_3" className="text-white" >カメラ</label>
        </div>
        <div>
          <select className="py-1 px-4 w-full rounded-md"  >
            <option>エリア名称</option>
            <option>サンプルアイテム</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input id="check_4" type="checkbox" className="w-[18px] h-[18px] accent-[#01CBA4]" />
          <label htmlFor="check_4" className="text-white" >撮影日</label>
        </div>
        <div className="flex justify-start">
          <input type="date" defaultValue={'2023-01-01'} className="py-1 px-4 w-48 rounded-md" />
        </div>
        <div className="flex items-center gap-2">
          <input id="check_5" type="checkbox" className="w-[18px] h-[18px] accent-[#01CBA4]" />
          <label htmlFor="check_5" className="text-white" >時刻</label>
        </div>
        <div className="flex justify-start">
          <input type="time" defaultValue={'00:00'} className="py-1 px-4 w-36 rounded-md" />
          ~
          <input type="time" defaultValue={'00:00'} className="py-1 px-4 w-36 rounded-md" />
        </div>
        <div className="flex">
          <button className=" rounded-full py-3 px-12 bg-[#01CBA4] text-white">
            検 索
          </button>
        </div>
      </div>

    </div>
  )
}

export default RecordMenu