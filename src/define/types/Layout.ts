export type LayoutType = {
  w: number
  h: number
  x: number
  y: number
}

export type ViewType = 'normal' | 'auto' | 'abnormal'

export type FPS = undefined | 5 | 10 | 15 | 20 | 25 | 30

export type DispLayout = {
  //画面ID
  g_id: string
  //開始位置
  start_pos: number
  //横
  w: number
  //縦
  h: number
  //監視対象グループID
  group_id: string
  //監視対象グループ名
  group_name: string
  //自動レイアウト切替時間
  time: number
  tagets: {
    //監視対象ID
    target_id: string
    //監視対象名
    target_name: string
    //監視対象区分
    target_kind: number
    devices: {
      //機器ID
      device_id: string
      //機器名
      device_name: string
      //機器区分
      device_kind: number
      cameras: {
        //カメラID
        camera_id: string
        //カメラ名
        camera_name: string
        //FPS
        fps: FPS
        //解像度横
        dps_w: number
        //解像度縦
        dps_h: number
        //カメラアドレス
        host: string
      }[]
    }[]
  }[]
}

// 
export type LayoutSetting = {
  //実行フラグ
  setteing_run: boolean | undefined
  //事業者ID
  operator_id: string
  //エリアID
  area_id: string
  //作成日時
  datetime: Date
  //設定ファイルID
  setting_file_id: string
  //設定ファイル名
  setting_filename: string
  //表示モード
  d_mode: 'auto' | 'normal' | 'abnormal'
  //画面表示構成
  disp_comp: DispLayout[]
}


/**
 * @description 上記のJSONデータを取得するAPI。
 * @type { GET }
 * @response LayoutSettingFile
 */

/**
 * @description 上記のJSONデータをパラメータとして、新しい設定ファイルを追加するAPI。
 * @type { POST }
 * @response Success | Error
 */

/**
 * @description setting_file_idと変更された上記のJSONデータをパラメータとして設定情報を更新するAPI。
 * @type { PUT }
 * @response Success | Error
 */

/**
 * @description setting_file_idをパラメータとして設定ファイルを削除するAPI。
 * @type { DELETE }
 * @response Success | Error
 */

