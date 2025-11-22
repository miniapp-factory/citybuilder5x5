"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Buildings() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h2 className="text-xl font-semibold">Buildings</h2>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This area will display buildings placed for points. Add your own
          components or logic here.
        </p>
      </CardContent>
    </Card>
  );
}
