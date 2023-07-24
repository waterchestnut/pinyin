/**
 * 拼音选项
 */
interface PinyinOptions {
  /**
   * 是否检查多音字
   *
   * @default false
   */
  checkPolyphone: boolean

  /**
   * 输出拼音的大小写模式
   *
   * @default 0
   * @description `0` - 首字母大写 `1` - 全小写 `2` - 全大写
   */
  charCase: 0 | 1 | 2
}

/**
 * 汉字拼音转换
 */
class Pinyin {
  constructor(options?: PinyinOptions)

  /**
   * 设置参数
   * @param options 拼音选项
   */
  setOptions(options?: PinyinOptions): void

  /**
   * 获取拼音首字母
   * @param str 输入的中文字符串
   */
  getCamelChars(str: string): string

  /**
   * 获取拼音
   * @param str 输入的中文字符串
   */
  getFullChars(str: string): string
}

const pinyin: Pinyin
export default pinyin
