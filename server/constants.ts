import * as PATH from 'path'
const { resolve } = PATH


export const ROOT = resolve( __dirname, '../' )
export const SERVER = resolve( ROOT, 'server' )
export const SRC = resolve( ROOT, 'src' )

export const ENTRY = resolve( SRC, 'entry.tsx' )
export const OUTPUT = resolve( ROOT, 'build' )

export const OUTPUT_FILE_NAME = 'bundle.js'

export const ENTRY_INDEX_HTML = resolve( SRC, 'index.html' )
export const OUTPUT_INDEX_HTML = resolve( OUTPUT, 'index.html' )
