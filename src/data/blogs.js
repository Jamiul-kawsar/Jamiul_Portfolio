import MultiClass_Chest_XRay_Loss_Curve from "../assets/contentImages/resnet50_frozen_training_loss.png"
import MultiClass_Chest_XRay_Accuracy_Curve from "../assets/contentImages/resnet50_frozen_training_accuracy.png"

const markdownFiles = import.meta.glob(
  "../content/blogs/*.md",
  {
    eager: true,
    query: "?raw",
    import: "default",
  }
);

const chestXRayMarkdown = markdownFiles[
  "../content/blogs/Multi-Class_Chest_X-Ray_Classification.md.md"
].replace(
  "../assets/contentImages/resnet50_frozen_training_loss.png",
  MultiClass_Chest_XRay_Loss_Curve
).replace(
  "../assets/contentImages/resnet50_frozen_training_accuracy.png",
  MultiClass_Chest_XRay_Accuracy_Curve
);

export const blogs = [
  {
    id: 1,
    slug: "chest-x-ray-classification-resnet50",
    title: "Multi-Class Chest X-Ray Classification with ResNet50",
    excerpt:
      "How I built a reproducible deep-learning pipeline for 3-class chest X-ray classification — from dataset auditing to a 0.998 macro ROC-AUC with fine-tuned ResNet50.",
    coverImage: MultiClass_Chest_XRay_Loss_Curve,
    date: "2026-09-12",
    readTime: "9 min read",
    tags: ["PyTorch", "ResNet50", "Medical Imaging", "Transfer Learning"],
    content: chestXRayMarkdown,
  },
  {
    id: 2,
    slug: "Transfer_learning",
    title: "Transfer Learning in Pygame: Implementing Intelligent Agents with A* Pathfinding",
    excerpt:
      "Implementing intelligent agents in Pygame using the A* algorithm and OOP principles — and what happens when two pathfinding snakes share the same board.",
    coverImage: "",
    date: "2026-08-03",
    readTime: "6 min read",
    tags: ["Python", "A*", "Pygame", "Algorithms"],
    content: markdownFiles[
      "../content/blogs/Transfer_learning.md"
    ],
  },
];

export const getBlogBySlug = (slug) =>
  blogs.find((blog) => blog.slug === slug);