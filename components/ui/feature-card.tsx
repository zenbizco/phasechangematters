"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

interface FeatureCardProps {
  title: string;
  description: string;
  content: string;
  toastMessage?: string;
}

export function FeatureCard({ title, description, content, toastMessage = "Feature selected!" }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-600 dark:text-neutral-400">
          {content}
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => toast(toastMessage)}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
