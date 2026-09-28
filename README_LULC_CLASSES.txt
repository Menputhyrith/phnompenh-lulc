LULC 2026 class-separated web map
=================================

This version keeps the original qgis2web/OpenLayers map and adds a LULC class panel.

Classes:
1. Urban / Built-up
2. Agriculture
3. Water
4. Vegetation / Forest
5. Shrubland

How it works:
- All classes is selected by default.
- Select Urban, Agriculture, Water, Vegetation, or Shrubland to show that class only.
- You can select more than one class to combine classes.
- The original full LULC image is kept as the All Classes layer.

To publish:
1. Extract this ZIP.
2. Upload all files/folders to the GitHub Pages repository for the website.
3. Keep the folder structure unchanged.
4. Open index.html through the GitHub Pages URL.

The class PNGs are generated from the original LULC PNG using the five legend colors in the supplied qgis2web project.
