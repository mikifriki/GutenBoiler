<?php
/**
 * Plugin Name: Gutenberg Boilerplate
 * Description: This is a Boilerplate plugin to start building Gutenberg Blocks.
 * Text Domain: gutenberg_boilerplate
 * Version: 1.0.0
 **/

function gutenberg_boilerplate_assets() {

	// Register our block script with WordPress
	wp_register_script(
		'gutenberg-boilerplate-block-js',
		plugins_url( 'dist/container-block.js' , __FILE__  ),
		array( 'wp-blocks'),
		'1',
		true
	);

	echo (plugin_dir_path( __FILE__ ) . 'dist/container-block.js');
	// Enqueue the script in the editor
	register_block_type('gutenberg-boilerplate/blocks', array(
		'editor_script' => 'gutenberg-boilerplate-block-js',
	));
}

add_action( 'init', 'gutenberg_boilerplate_assets' );