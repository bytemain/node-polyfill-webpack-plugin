import {type MergeExclusive} from 'type-fest';
import {type Compiler} from 'webpack';

declare namespace NodePolyfillPlugin {
	export type Alias =
		| 'assert'
		| 'buffer'
		| 'Buffer'
		| 'console'
		| 'constants'
		| 'crypto'
		| 'domain'
		| 'events'
		| 'fs'
		| 'http'
		| 'https'
		| 'os'
		| 'path'
		| 'process'
		| 'punycode'
		| 'querystring'
		| 'stream'
		| '_stream_duplex'
		| '_stream_passthrough'
		| '_stream_readable'
		| '_stream_transform'
		| '_stream_writable'
		| 'string_decoder'
		| 'sys'
		| 'timers'
		| 'tty'
		| 'url'
		| 'util'
		| 'vm'
		| 'zlib'
		| 'setImmediate'
		| 'clearImmediate';

	export type IncludeOptions = {
		/**
		By default, the modules that were polyfilled in Webpack 4 are mirrored over. However, you can choose to only include certain aliases. For example, you can only have `console` polyfilled.
		*/
		includeAliases?: readonly Alias[];
	};

	export type ExcludeOptions = {
		/**
		By default, the modules that were polyfilled in Webpack 4 are mirrored over. However, if you don't want a module like `console` to be polyfilled you can specify alises to be skipped here.
		*/
		excludeAliases?: readonly Alias[];
	};

	export type Options = MergeExclusive<IncludeOptions, ExcludeOptions>;
}

declare class NodePolyfillPlugin {
	constructor(options?: NodePolyfillPlugin.Options);

	apply(compiler: InstanceType<typeof Compiler>): void;
}

export = NodePolyfillPlugin;
