from PIL import Image
import argparse

def crop_to_aspect_ratio(image_path, aspect_ratio):
    """
    Crops an image to a specified aspect ratio.

    Args:
        image_path (str): The path to the input image file.
        aspect_ratio (float): The desired aspect ratio (width/height).

    Returns:
        Image.Image or None: The cropped PIL Image object, or None if an error occurs.
    """
    try:
        img = Image.open(image_path)
        width, height = img.size
        target_width = int(height * aspect_ratio)
        target_height = int(width / aspect_ratio)

        if target_width > width:
            # Crop height
            top = (height - target_height) // 2
            bottom = top + target_height
            cropped_img = img.crop((0, top, width, bottom))
        else:
            # Crop width
            left = (width - target_width) // 2
            right = left + target_width
            cropped_img = img.crop((left, 0, right, height))

        return cropped_img

    except FileNotFoundError:
        print(f"Error: Image file not found at {image_path}")
        return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Crop an image to a specific aspect ratio.")
    parser.add_argument("image_path", help="Path to the input image file.")
    parser.add_argument("--ratio", type=float, default=1.19, help="Desired aspect ratio (width/height). Defaults to 1.19.")
    parser.add_argument("-o", "--output", help="Path to save the cropped image. If not provided, the cropped image will be displayed.")

    args = parser.parse_args()

    cropped_image = crop_to_aspect_ratio(args.image_path, args.ratio)

    if cropped_image:
        if args.output:
            try:
                cropped_image.save(args.output)
                print(f"Cropped image saved to {args.output}")
            except Exception as e:
                print(f"Error saving the image: {e}")
        else:
            cropped_image.show()